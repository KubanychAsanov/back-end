const {Router} = require('express')
const router = Router()
const News = require('../models/news_model')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить новости',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const news = new News(req.body.title, req.body.discription, req.body.img)
    
    await news.save()

    res.redirect('/news')
})

module.exports = router