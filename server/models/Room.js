const {Schema, model}=require('mongoose')

const schema=new Schema({
    name: {type:String},
    number: Number,
    guests_count: Number,
    guests_additionally: Number,
    price: Number,
    image: String,
    rate: Number,
    category: {type:Schema.Types.ObjectId, ref:'Category'},
    qualities: [{type:Schema.Types.ObjectId, ref:'Quality'}],
    bookings: [{checkin: {type:Date}, checkout: {type:Date}, count: {type:Number}}]
},{
    timestamps:true //добавит в модель инфу когда модель была создана и обновлена
})

module.exports=model('Room',schema)