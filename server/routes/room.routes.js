const express=require('express')
const router=express.Router({mergeParams:true})
const roleMiddleWare=require("../middleware/role.middleware")
const Room = require("../models/Room");

router.get('/', async(req,res)=>{
    try{
        const list=await Room.find()
        res.status(200).send(list)
    }catch (e) {
        res.status(500).json({
            message:'На сервере произошла ошибка. Попробуйте позже'
        })
    }
})
router.post('/',roleMiddleWare('ADMIN'),
    async(req,res)=>{
        const {number}=req.body
        try{
            const existingRoom=await Room.findOne({number})
            if (existingRoom){
                return res.status(400).json({
                    error:{
                        message:'ROOM_EXISTS',
                        code: 400
                    }
                })
            }
            const newRoom=await Room.create({...req.body})
            res.status(201).send(newRoom)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }
})
router.patch(
    '/:roomId',
    roleMiddleWare('ADMIN'),
    async(req,res)=>{
        try{
            const {roomId}=req.params
            const updatedRoom=await Room.findByIdAndUpdate(roomId,req.body, {new:true})
            res.send(updatedRoom)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }}
)

router.delete(
    '/:roomId',
    roleMiddleWare('ADMIN'),
    async(req,res)=>{
        try{
            const {roomId}=req.params
            const removedRoom= await Room.findById(roomId)
            await removedRoom.remove()
            return res.send(null)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    }
)

module.exports=router