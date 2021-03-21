const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')
const { resolve } = require('path')

class News{
    constructor(title, discription, img){
        this.title = title
        this.discription = discription
        this.img = img
        this.id = null
    }

    toJSON(){
        return JSON.stringify({
            title: this.title,
            discription: this.discription,
            img: this.img,
            id: this.id
        })
    }

    async save(){
        const news = await News.getAll()
        news.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'news.json'),
                JSON.stringify(news),
                (err) =>{
                    if (err) {
                        reject(err)
                    } else{
                        resolve()
                    }
                }
            )
        })
    }

    static getAll(){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                path.join(__dirname, '..', 'data', 'news.json'),
                'utf-8',
                (err, content) => {
                    if (err){ 
                        reject (err)
                    } else {
                        resolve(JSON.parse(content))
                    }
    
                }
            ) 
        })

    }
}

module.exports = News