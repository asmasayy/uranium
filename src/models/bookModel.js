const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String, 
    tags: [],
    year:  Number,
    stockAvailable: Boolean,
    totalPages : Number,
    isPublished : Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
