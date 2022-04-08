const {Schema, model}=require('mongoose')

const schema=new Schema({
    roomId:{type:Schema.Types.ObjectId, ref: 'Rooms',required:true},
    userId:{type:Schema.Types.ObjectId, ref: 'Users',required:true},
    checkin:{type:String,required:true},
    checkout: {type:String,required:true},
    count: {type:String,required:true}
},{
    timestamps: {
        createdAt:'created_at'
    }
})

module.exports=model('Booking',schema)
