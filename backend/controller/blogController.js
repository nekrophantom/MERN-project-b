const asyncHandler = require('express-async-handler')

const getBlogs = asyncHandler(async (req, res) => {
    res.status(200).json({
        msg : 'Get all'
    })
})

const createBlog = asyncHandler(async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a title')
    }
})

const updateBlog = asyncHandler(async (req, res) => {
    res.status(200).json({
        msg : 'update'
    })
})

const deleteBlog = asyncHandler(async (req, res) => {
    res.status(200).json({
        msg : 'delete'
    })
})


module.exports = {
    getBlogs, createBlog, updateBlog, deleteBlog
}