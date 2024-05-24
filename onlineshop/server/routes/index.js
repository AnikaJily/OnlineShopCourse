const Router = require('express')
const router = new Router();
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/category', categoryRouter)
router.use('/item', itemRouter)


module.exports = router