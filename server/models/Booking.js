const {Schema, model}=require('mongoose')

const schema=new Schema({
    content:{type:Object, required:true},
    roomId:{type:Schema.Types.ObjectId, ref: 'Rooms',required:true},
    userId:{type:Schema.Types.ObjectId, ref: 'Users',required:true}
},{
    timestamps: {
        createdAt:'created_at'
    }
})

module.exports=model('Booking',schema)