const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('news', {
        title: 'Новости',
        isNews: true
    })
})

module.exports = router

