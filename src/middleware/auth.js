const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel");

const validateToken = async function(req,res,next){
    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']

    if(!token){
        res.send({status:false,msg:"token must be present"})
    }
    let decodedToken = jwt.verify(token,"functionup-thorium")
    if(!decodedToken){
        res.send({status:false,msg:"token is invalid"})
    }

    next()
}

const validateUser = async function (req, res,next) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
    next()
}
module.exports.validateToken= validateToken
module.exports.validateUser=validateUser
