const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    if (book.author_id && book.publisher_id){
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    }else {
        res.send({msg:"author Id and Publisher Id are required"})
    }
    // if (book.author_id === bookModel.author_id){
    //     let bookCreated = await bookModel.create(book)
    //     res.send({data: bookCreated})
    // } else{
    //     res.send({msg:"not valid author ID"})
    // }
    
}

const getAllBookDetails=async function(req,res){
    let particularBook=await bookModel.find().populate(["author_id" , "publisher_id"])
    res.send(particularBook)
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

const updateBooksData= async function(req,res){
 let bookUpdates= await bookModel.find().updateMany({publisher:{ $in :["625b9d05b0fcdf65bc21fdb6","625b9d6eb0fcdf65bc21fdbc"]}},
 {isHardCover:true},
 {new:true}).select({isHardCover:1,_id:0})


 const authorRatings =await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
 let author_id=authorRatings.map(element=>element._id)
 console.log(author_id)

 let array=[]
 for (let i=0;i<author_id.length;i++){
     const newPrice= await bookModel.updateMany(
         {author:author_id[i]},
         {$inc:{"price":10}},
         {new:true}
     )
     array.push(newPrice)
 }
  res.send({msg: bookUpdates,array})
}




module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getAllBookDetails=getAllBookDetails
module.exports.updateBooksData=updateBooksData
