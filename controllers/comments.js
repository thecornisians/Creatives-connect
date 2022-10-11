const Comment = require('../models/Comments')

module.exports ={
    createComments : async (req,res) => {
        try {
            await Comment.create({
                comment: req.body.comment,
                likes: 0,
                post:req.params.id
            })
        console.log("Comment has been added!")
        res.redirect("/post"+req.params.id)
        } catch (error) {
            console.log(error)
        }
    }
}

