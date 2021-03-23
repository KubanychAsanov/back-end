const {Router} = require('express')
const News = require('../models/news_model')
const router = Router()

router.get('/', async (req, res) => {
    res.json({name: 'Kuba'})
    // const news = await News.getAll()
    // res.render('news', {
    //     title 'Новости',
    //     isNews: true,
    //     news
    // })
})

// router.post('/edit', async (req, res) => {
//     await News.update(req.body)
//     res.redirect('/news')
//   })

// router.get('/:id', async (req, res) => {
//     const news = await News.getById(req.params.id)
//     res.render('news_item',{
//         title: news.title,
//         news
//     })
// })

// router.get('/:id/edit', async (req, res) => {
//     if (!req.query.allow){
//         return res.redirect('/')
//     } 

//     const news = await News.getById(req.params.id)
    
//     res.render('news_edit', {
//         title: `Редактировать ${news.title}`,
//         news
//     })
// }) 


module.exports = router

