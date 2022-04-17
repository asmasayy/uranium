const publisherModel = require('../models/publisherModel')


const createPublisher= async function (req,res){
    let newPublisher=req.body
    let newPublishercreated=await publisherModel.create(newPublisher)
    res.send({data:newPublishercreated})
}

module.exports.createPublisher=createPublisher