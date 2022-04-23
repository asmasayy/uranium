const jwt = require("jsonwebtoken")
// const userModel = require("../models/userModel");

const validateToken = async function(req,res,next){
    try{
    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']

    if(!token){
        res.send({status:false,msg:"token must be present"})
    }
    
    let decodedToken = jwt.verify(token,"functionup-thorium")
    if(!decodedToken){
        res.status(401).send({status:false,msg:"token is invalid"})
    }}catch(err){
        return res.status(401).send({err})
    }


    next()
}

const authUser=async function(req,res,next){
    try{
    let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']

    let decodedToken=jwt.verify(token,"functionup-thorium")

    let userId=req.params.userId
    let userlogged=decodedToken.userId
    
    if(userlogged != userId){
        res.status(403).send({status:false,msg:"Unauthorised access"})
    }
}catch(err){
    return res.status(403).send({err})
}
    next()
}



module.exports= {validateToken,authUser}

