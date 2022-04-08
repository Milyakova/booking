const express=require('express')
const router=express.Router({mergeParams:true})
const User=require('../models/User')
const Role=require('../models/Role')
const authMiddleware=require("../middleware/auth.middleware")
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const {generateUserData} = require("../utils/helpers");
const tokenService = require("../services/token.service");

// /api/auth/registration
// /api/auth/login
// /api/auth/auth

router.post('/registration',  [

    check('email',"Некорректный email").isEmail(),
    check('password',"Минимальная длина пароля 8 символов").isLength({min:8}),

    async(req,res)=>{
        console.log('server working with registration request')
        const {email, password}=req.body
        try{
            const errors=validationResult(req)
            if (!errors.isEmpty()){
                return res.status('400').json({
                    error:{
                        message:"INVALID_DATA",
                        code:400,
                        errors:errors.array()
                    }
                })
            }
            const existingUser=await User.findOne({email})
            if (existingUser){
                return res.status(400).json({
                    error:{
                        message:'EMAIL_EXISTS',
                        code: 400
                    }
                })
            }
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }

        const hashedPassword=await bcrypt.hash(password, 12)
        const userRole=await Role.findOne({value:'USER'})
        const newUser=await User.create({
            ...generateUserData(),
            ...req.body,
            password: hashedPassword,
            roles:[userRole.value]

        })
        const tokens=tokenService.generate({_id:newUser._id, role:newUser.roles})
        await tokenService.save(newUser._id, tokens.refreshToken)
        res.status(201).send({...tokens, userId:newUser._id})
    }
])

router.post('/login', [
    check('email','Email некорректный' ).normalizeEmail().isEmail(),
    check('password','Пароль не может быть пустым').exists(),

    async(req,res)=>{
        try{
            const errors=validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    error:{
                        message:'INVALID_DATA',
                        code:400,
                        errors:errors.array()
                    }
                })
            }
            const {email, password}=req.body
            const existingUser=await User.findOne({email})

            if (!existingUser){
                return res.status(400).send({
                    error:{
                        message:'EMAIL_NOT_FOUND',
                        code:400
                    }
                })
            }
            const isPasswordEqual=await bcrypt.compare(password, existingUser.password)
            console.log('isPasswordEqual ',isPasswordEqual)
            if (!isPasswordEqual){
                return res.status(400).send({
                    error:{
                        message:'INVALID_PASSWORD',
                        code:400
                    }
                })
            }
            // if (existingUser.roles === 'ADMIN') {
            //     const token = generateAccessToken(existingUser._id, existingUser.roles, existingUser.email)
            //     return res.json({ token })
            // }
            console.log('existing user ', existingUser)
            const tokens=tokenService.generate({_id:existingUser._id, role:existingUser.roles, name:existingUser.name,email:existingUser.email})
            console.log('tokens ', tokens)
            await tokenService.save(existingUser._id,tokens.refreshToken)
            res.status(200).send({...tokens, userId:existingUser._id})
        }catch (e) {
            res.status(500).json({
                message:'На сервере произошла ошибка. Попробуйте позже'
            })
        }

    }])
function isTokenInvalid(data, dbToken){
    return !data || !dbToken || data._id!==dbToken?.user?.toString()
}
router.get('/token', authMiddleware, async (req,res)=>{
    try{
        const {refresh_token:refreshToken}=req.body
        const data=tokenService.validateRefresh(refreshToken)
        const dbToken=await tokenService.findToken(refreshToken)
        if (isTokenInvalid(data, dbToken)){
            return res.status(401).json({message:'Unathorized'})
        }
        const tokens=tokenService.generate({
            _id: data._id
        })
        await tokenService.save(data._id, tokens.refreshToken)
        res.status(200).send({...tokens, userId:data._id})
    }catch (e) {
        res.status(500).json({
            message:'На сервере произошла ошибка. Попробуйте позже'
        })
    }
})

// router.patch('/:userId',auth, async(req,res)=>{
//     try{
//         const {userId}=req.params
//         if (userId===req.user._id){
//             const updatedUser=await User.findByIdAndUpdate(userId,req.body, {new:true})
//             res.send(updatedUser)
//         }else{
//             res.status((401).json({
//                 message:"Unathorized"
//             }))
//         }
//     }catch (e) {
//         res.status(500).json({
//             message:'На сервере произошла ошибка. Попробуйте позже'
//         })
//     }
// })
// router.get('/',async (req,res)=>{
//     try{
//
//         res.json('server work')
//         const list=await User.find()
//         res.status(200).send(list)//отправляем на фронтенд лист.200 статус по умолчанию:res.send()
//     }catch(e){
//         res.status(500).json({
//             message:'На сервере произошла ошибка. Попробуйте позже'
//         })
//     }
// })

module.exports=router