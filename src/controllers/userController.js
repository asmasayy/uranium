const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {

    res.send({ msg: "This is today's assignment"})
    }


    const basicCodes= async function(req, res) {

        res.send({ msg: "This is working fine"})
        }   



















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.basicCodes= basicCodes