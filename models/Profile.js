const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
about: {
    type: String,
    required: true
},
location: {
    type: String,
    Default: 'Remote'
},
posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
}

})


module.export = mongoose.model('Profile', ProfileSchema)





//create a model for user so i can render it as part of a bio page or something like that.It will be the information about the user 
