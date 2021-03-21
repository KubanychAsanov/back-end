const {Router} = require('express')
const News = require('../models/news_model')
const router = Router()

router.get('/', async (req, res) => {
    const news = await News.getAll()
    res.render('news', {
        title: 'Новости',
        isNews: true,
        news
    })
})

router.get('/:id', async (req, res) => {
    const news = await News.getById(req.params.id)
    res.render('news_item',{
        title: news.title,
        news
    })
})

module.exports = router

