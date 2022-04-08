const express=require('express')
const router=express.Router({mergeParams:true})

router.use('/auth', require('./auth.routes'))
router.use('/room', require('./room.routes'))
router.use('/booking', require('./booking.routes'))
router.use('/comment', require('./comment.routes'))
router.use('/category', require('./category.routes'))
router.use('/quality', require('./quality.routes'))
router.use('/admin', require('./admin.routes'))
router.use('/user', require('./user.routes'))


module.exports=router