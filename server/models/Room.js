const {Schema, model}=require('mongoose')

const schema=new Schema({
    name: {
        type:String,
        required:true,
    },
    photo:{type:String},
    number: {type:String},
    category: {type:Schema.Types.ObjectId, ref:'Category', required:true},
    guests_count: {type:String},
    guests_additionally: {type:String},
    price: {type:String},
    qualities: [{type:Schema.Types.ObjectId, ref:'Quality', required:true}]
    // rate: {type:String},
    // bookings:[{type:Schema.Types.ObjectId, ref:'Booking'}]
},{
    timestamps:true //добавит в модель инфу когда модель была создана и обновлена
})

module.exports=model('Room',schema)