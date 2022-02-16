const {Schema, model}=require('mongoose')

const schema=new Schema({
    user: {type:Schema.Types.ObjectId, ref:'User'},
    refreshToken:{type:String, required:true}
},{
    timestamps:true //добавит в модель инфу когда модель была создана и обновлена
})

module.exports=model('Token',schema)