const {Schema, model}=require('mongoose')

const schema=new Schema({
    content:{type:String, required:true},
    //на странице какой комнаты комментарий
    pageId:{type:Schema.Types.ObjectId, ref: 'Rooms',required:true},
    //кто оставил коммент
    userId:{type:Schema.Types.ObjectId, ref: 'Users',required:true}
},{
    timestamps: {
        createdAt:'created_at'
    }
})

module.exports=model('Comment',schema)