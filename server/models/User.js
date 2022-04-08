const {Schema, model}=require('mongoose')

const schema=new Schema({
    name: {type:String},
    email: {type:String, required:true,unique:true},
    password: {type:String, required:true},
    image: {type:String},
    sex: {type:String, enum:['male','female','other']},
    roles:[{type:String, ref:'Role'}]
},{
    timestamps:true //добавит в модель инфу когда модель была создана и обновлена
})

module.exports=model('User',schema)