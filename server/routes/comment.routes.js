const express=require('express')
const router=express.Router({mergeParams:true})
const auth=require("../middleware/auth.middleware")
const Comment=require("../models/Comment")

// /api/comment  - дальше вариативно get или post
router
    .route('/')
    .get(auth, async (req,res)=>{
        try{
            const {orderBy, equalTo}=req.query // эти параметры можем использ при фильтрации комментариев
            const list=await Comment.find({[orderBy]:equalTo})
            res.send(list)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    })
    .post(auth, async(req,res)=>{
        try{
            const newComment= await Comment.create({
                ...req.body,
                userId:req.user._id
            })
            res.status(201).send(newComment)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    })

router.delete('/:commentId',auth,async (req,res)=>{
    try{
        const {commentId}=req.params
        const removedComment= await Comment.findById(commentId)
        //  const removedComment=await Comment.find({_id:commentId}) одно и то же

        if (removedComment.userId.toString()===req.user._id){
            await removedComment.remove()
            return res.send(null)
        }else{
            res.status((401).json({message:"Unathorized"}))
        }
    }catch (e) {
        res.status(500).json({
            message:'На сервере произошла ошибка. Попробуйте позже'
        })
    }
})


module.exports=router