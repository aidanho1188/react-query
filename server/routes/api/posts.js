const mongoose = require('mongoose')
const {Router} = require('express')
const router = Router()
const Posts = require('../../models/Posts')

// get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find()
    res.status(200).json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})


module.exports = router
