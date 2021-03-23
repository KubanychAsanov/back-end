const express = require('express')
const app = express()
const path = require('path')
const sequelize = require('./database')
const exphbs = require('express-handlebars')
const helmet = require('helmet')
const compression = require('compression')
const homeRoutes = require('./routes/home')
const newsRoutes = require('./routes/news')
const addRoutes = require('./routes/add')

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())

app.use('/', homeRoutes)
app.use('/news', newsRoutes)
app.use('/add', addRoutes)

const PORT = process.env.PORT || 3000

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
    console.log('Connection has been established successfully.');
  } catch (error) {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
    console.error('Unable to connect to the database:', error);
  }
}

start()