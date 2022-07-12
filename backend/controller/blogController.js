const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogModels')

const getBlogs = asyncHandler(async (req, res) => {

    const blogs = await Blog.find()

    res.status(200).json(blogs)
})

const createBlog = asyncHandler(async (req, res) => {
    if(!req.body.title){
        res.status(400)
        throw new Error('Please add a title')
    }

    const create = await Blog.create({
        title : req.body.title,
        subtitle : req.body.subtitle,
        content : req.body.content
    })

    res.status(200).json(create)
})

const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(!blog){
        res.status(400)
        throw new Error('Blog not found')
    }
    const updateblog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updateblog)
})

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if(!blog){
        res.status(400)
        throw new Error('Blog not found')
    }

    const deleteblog = await blog.remove()

    res.status(200).json({ id : req.params.id})
})


module.exports = {
    getBlogs, createBlog, updateBlog, deleteBlog
}