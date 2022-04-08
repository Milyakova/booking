const jwt = require('jsonwebtoken')
const config=require('config')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({ message: 'Not authorized' })
            }
            const { role: userRoles } = jwt.verify(token, config.get('accessSecret'))
            let hasAccess = false
            userRoles.forEach(role=>{
                if (roles.includes(role)){
                    hasAccess=true
                }
            })

            if (!hasAccess) {
                return res.status(403).json({ message: 'У вас нет доступа' })
            }
            next()
        } catch (error) {
            return res.status(403).json({ message: 'Not authorized' })
        }
    }
}