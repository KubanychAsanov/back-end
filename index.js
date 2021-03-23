const express = require('express')
const app = express()
const path = require('path')
const sequelize = require('./database')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const newsRoutes = require('./routes/news')
const addRoutes = require('./routes/add')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

async function start(){
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
start()

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/news', newsRoutes)
app.use('/add', addRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})