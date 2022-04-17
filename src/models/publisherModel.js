const mongoose=require('mongoose')


publisherschema=new mongoose.Schema({
    name:String,
    headQuarter:String

})

module.exports=mongoose.model('newPublisher',publisherschema)