const tokenService=require("../services/token.service")

module.exports=(req,res,next)=>{
    // OPTIONS - специальный метод для запросов, кот проверяет доступность сервера
    if (req.method==='OPTIONS'){
        return next()
    }
    try{
        //провалидируем токены которые в хедерах. Они там записаны как строчка "Bearer fjkghfgkj"
        const token=req.headers.authorization.split(' ')[1]
        if (!token){
            return res.status((401).json({
                message:"Unathorized"
            }))
        }
        const data=tokenService.validateAccess(token) // если он провалидировал токен, то еще и распарсил
        console.log('decoded', data)
        req.user=data
        next()
    }catch (e) {
        res.status((401).json({message:"Unathorized"}))
    }
}