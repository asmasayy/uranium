const mongoose = require('mongoose');
let ObjectId= mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema({
    Userid: {
        type:ObjectId,
        ref:"UserCreate"
    },
	
	productId: {
        type:ObjectId,
        ref:"productCreate"
    },
	amount: Number,
	isFreeAppUser:Boolean
	
}, {timestamps:true})



module.exports = mongoose.model('OrderCreate', OrderSchema) 