const {Schema, model}=require('mongoose')

const schema=new Schema({
    name:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true,
    }
},{
    timestamps:true //добавит в модель инфу когда модель была создана и обновлена
})

module.exports=model('Quality',schema)
