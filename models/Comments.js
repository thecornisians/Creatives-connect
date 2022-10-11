const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment: { 
        type: String
    
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    likes:{
        type: Number,
    }
})

module.exports = mongoose.model('Comments', CommentSchema)
