const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please add a title value']
    },
    subtitle : {
        type : String,
        required : [true, 'Please add a subtitle value']
    },
    content : {
        type : String,
        required : [true, 'Please add a title value']
    },
},
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Blog', blogSchema)
