// vespers vcZN6luH2tGozT4R

const Category= require("../models/Category")
const Quality= require("../models/Quality")
// const Room=require('../models/Room')

const categoriesMock=require('../mock/categories.json')
const qualitiesMock=require('../mock/qualities.json')
// const roomsMock=require('../mock/rooms.json')

module.exports=async()=> {
    const categories= await Category.find()
    if (categories.length!==categoriesMock.length){
        await createInitialEntity(Category,categoriesMock)
    }

    const qualities= await Quality.find()
    if (qualities.length!==qualitiesMock.length){
        await createInitialEntity(Quality,qualitiesMock)
    }
    // const rooms= await Room.find()
    // if (rooms.length!==roomsMock.length){
    //     await createInitialEntity(Room,roomsMock)
    // }
}

async function createInitialEntity(Model, data){
    Model.collection.drop() //очищаем коллекцию на всякий
    return Promise.all(
        data.map(async item=>{
            try {
                delete item._id
                const newItem=new Model(item)
                await newItem.save() // метод save сохраняет в бд
                return newItem
            }catch(e){
                return e
            }
        })
    )
}