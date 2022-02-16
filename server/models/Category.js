const {Schema, model}=require('mongoose')
// id по умолчанию добавляется в схему
const schema=new Schema({
    name:{
        type:String,
        required:true,
    }
},{
    timestamps:true //добавит в модель инфу когда модель была создана и обновлена
})

module.exports=model('Category',schema)