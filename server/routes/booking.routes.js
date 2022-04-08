const express=require('express')
const router=express.Router({mergeParams:true})
const authMiddleware=require("../middleware/auth.middleware")
const roleMiddleware=require("../middleware/role.middleware")
const Booking=require("../models/Booking")

// /api/booking  - бронь, дальше вариативно get или post
router
    .route('/')
    .get( async (req,res)=>{
        try{
            const list=await Booking.find()
            res.send(list)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    })
    .post(authMiddleware, async(req,res)=>{
        try{
            const newBooking= await Booking.create({
                ...req.body,
                userId:req.user._id
            })
            res.status(201).send(newBooking)
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    })

router.delete('/:bookingId',roleMiddleware('ADMIN'),async (req,res)=>{
    try{
        const {bookingId}=req.params
        const removedBooking= await Booking.findById(bookingId)

        if (removedBooking.userId.toString()===req.user._id){
            await removedBooking.remove()
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