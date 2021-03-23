const Sequelize = require('sequelize');
const sequelize = require('../database')
const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')

const news = sequelize.define('News', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER 
    },
    // done: {
    //     type: Sequelize.BOOLEAN,
    //     allowNull: false
    // }, 
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    discription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },

})
module.exports = news

// class News{
//     constructor(title, discription, img){
//         this.title = title
//         this.discription = discription
//         this.img = img
//         this.id = uuid()
//     }

//     toJSON(){
//         return {
//             title: this.title,
//             discription: this.discription,
//             img: this.img,
//             id: this.id
//         }
//     }

//     static async update(news_item){
//         const news = await News.getAll()

//         const idx = news.findIndex(c => c.id === news_item.id)
//         news[idx] = news_item

//         return new Promise((resolve, reject) => {
//             fs.writeFile(
//                 path.join(__dirname, '..', 'data', 'news.json'),
//                 JSON.stringify(news),
//                 (err) =>{
//                     if (err) {
//                         reject(err)
//                     } else{
//                         resolve()
//                     }
//                 }
//             )
//         })
//     }

//     async save(){
//         const news = await News.getAll()
//         news.push(this.toJSON())

//         return new Promise((resolve, reject) => {
//             fs.writeFile(
//                 path.join(__dirname, '..', 'data', 'news.json'),
//                 JSON.stringify(news),
//                 (err) =>{
//                     if (err) {
//                         reject(err)
//                     } else{
//                         resolve()
//                     }
//                 }
//             )
//         })
//     }

//     static getAll(){
//         return new Promise((resolve, reject) =>{
//             fs.readFile(
//                 path.join(__dirname, '..', 'data', 'news.json'),
//                 'utf-8',
//                 (err, content) => {
//                     if (err){ 
//                         reject (err)
//                     } else {
//                         resolve(JSON.parse(content))
//                     }
    
//                 }
//             ) 
//         })
//     }

//     static async getById(id){
//         const news = await News.getAll()
//         return news.find(c => c.id === id)
//     }
// }

// module.exports = News