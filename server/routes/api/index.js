const {Router} = require('express')
const postRouter = require('./posts')

const router = Router()

router.use('/posts', postRouter)

module.exports = router
