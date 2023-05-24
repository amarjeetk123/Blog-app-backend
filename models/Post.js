const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

    title:{
        type:String,
        required : [true , "title is required"]
    },
    description:{
        type:String,
        required : [true , "title is required"]
    },
    // username:{ 
    //     type : String ,
    // }

},

{ timestamps:true }

)

module.exports = mongoose.model("Post" , postSchema )