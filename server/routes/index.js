const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const cakeRouter = require('./cakeRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/cake', cakeRouter)
router.use('/type', typeRouter)


module.exports = router