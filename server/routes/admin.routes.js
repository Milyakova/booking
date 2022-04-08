const express = require('express')
const router = express.Router({mergeParams:true})
const roleMiddleWare = require('../middleware/role.middleware')
const Room = require("../models/Room");

//api/admin/createRoom
//api/admin/updateRoom/:id
//api/admin/deleteRoom/:id

router.post(
    '/createRoom',
    roleMiddleWare('ADMIN'),
    async(req,res)=>{
        try{
            const newRoom= await Room.create({
                ...req.body
            })
            res.status(201).send(newRoom)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    }
)

router.patch(
    '/updateRoom/:id',
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
    '/deleteRoom/:id',
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

module.exports = router