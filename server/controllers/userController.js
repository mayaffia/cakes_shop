const apiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')


class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(apiError.badRequest('wrong email or password'))
        }
        const potentialUser = await User.findOne({where: {email}})
        if (potentialUser) {
            return next(apiError.badRequest('user with this email already exists'))
        }

        const user = await User.create({email, password})
        return res.json(user)
    }

    async login(req, res, next) {
       const {email, password} = req.body
       const user = await User.findOne({where:{email}})
       if (!user) {
        return next(apiError.internal('mo such user'))
       }
       let ifPasswordRight = bcrypt.compareSync(password, user.password)
       if (!ifPasswordRight) {
        return next(apiError.internal('wrong password'))
       }

       return res.json({email, password})
    }

    /*async check(req, res) {
        return res.json({email, password})
    }*/

    async getAll(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }
}

module.exports = new UserController()