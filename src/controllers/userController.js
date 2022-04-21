const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")
const userModel = require("../models/userModel")
const { is } = require("express/lib/request")

const createUser= async function (req, res) {
        let data= req.body
        let savedData= await UserModel.create(data)
        res.send({data:savedData})
    }


    const createProduct= async function (req, res) {
        let data= req.body
        let savedData= await productModel.create(data)
        res.send({data:savedData})
    }

    const createOrder= async function (req, res) {
        let data= req.body
        let user= await userModel.findById(req.body.Userid)
        if(!user){
         return res.send({msg:"Not a valid User Id"})
        }
        let product= await productModel.findById(req.body.productId)
        if(!product){
            return res.send({msg:"not a valid Product Id"})
        }

        let isFreeAppUser = req.headers["isfreeappuser"]
        if(isFreeAppUser == "false"){
            if(productModel.price < UserModel.balance){
                userModel.updateMany({UserCreate:{$eq:UserCreate._id}},{$inc:{balance: - productModel.price}},{new:true})
                let userData= req.body;
                userData.isFreeAppUser = isFreeAppUser;
                userData.amount = product.price
            }else{
                res.send({msg:"You don't have sufficient balance in your account"})
            }
        }else{
            let Userdata2= req.body;
            Userdata2.isFreeAppUser =isFreeAppUser
            Userdata2.amount = 0;
        }

        let savedData= await orderModel.create(data)
        res.send({data:savedData})
    }

   







  module.exports.createUser= createUser
    module.exports.createProduct= createProduct
    module.exports.createOrder= createOrder



// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)
//     //counter
//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
    
//     }


// const createAUser = function(req, res) {
//     let requestBody = req.body
//     let headers  = req.headers
    

//     //Printing all the headers before modification - addition of a new header called 'month'
//     console.log('Request headers are before: ', headers)

//     //Accessing a request header called 'batch'
//     let batchHeader = headers["batch"] // headers.batch 
    
//     ///Accessing a request header called 'content-type'
//     let contentHeader = headers['content-type'] // headers.content-type

//     console.log('Content Type hedser is: ',contentHeader)
//     console.log('Batch header is: ', batchHeader)

//     //Adding a new requets header
//     req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


//     //Printing the headers after modification - addition of a new header called 'month'
//     console.log('Request headers are after: ', headers)


//     console.log('Request property called current-day', req['current-day'])
    
//     //Adding a response header
//     res.header('year', '2022')

//     res.send('Just create a user')
// }

// module.exports.createAUser = createAUser
// module.exports.basicCode = basicCode

















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }


// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode