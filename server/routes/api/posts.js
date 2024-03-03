const {Router} = require('express')
const Posts = require('../../models/Posts')

const router = Router()

// get all posts
router.get('/', (req, res) => {
  try {
    const posts = await Posts.find({});
    res.status(200).json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})


module.exports = router
