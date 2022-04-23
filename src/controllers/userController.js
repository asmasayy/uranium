const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
  }
  catch(err){
    return res.status(400).send({err})
  }
};

const loginUser = async function (req, res) {
  
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // let decodedToken = jwt.verify(token, "functionup-thorium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
}catch(err){
  return res.status(401).send({err})
}
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userData },
    {$set:{isDeleted:true}},
    {new:true}
  )
  res.send({ status: true, data: updatedUser });
}

const postUser= async function(req,res){
  try{
  let userId=req.params.userId;
  let user=await userModel.findById(userId)
  if(!user){
    return res.status(401).send("no such user exists")
  }
 let post=req.body.posts
 let updatedPost=await userModel.findOneAndUpdate({_id:userId},{posts:post},{new:true})

  res.send({status:true,data:updatedPost})
}catch{
  res.status(404).send({msg:"not found"})
}
}


module.exports={createUser,getUserData,updateUser,loginUser,deleteUser,postUser}
