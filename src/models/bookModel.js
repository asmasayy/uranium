const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    isHardCover:{
        type:Boolean,
        default:false
    },
    price: Number,
    ratings: Number,
    publisher_id:{
        type:ObjectId,
        ref:"newPublisher"
    }   


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
