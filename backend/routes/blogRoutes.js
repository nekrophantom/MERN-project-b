const express = require('express')
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controller/blogController')
const router = express.Router()




router.route('/').get(getBlogs).post(createBlog)

router.route('/:id').put(updateBlog).delete(deleteBlog)



module.exports = router