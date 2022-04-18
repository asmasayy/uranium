const batchModel= require("../models/batchModel")


const createBranch = async function (req, res) {
    const branch = req.body
    let branchCreate = await batchModel.create(branch)
    res.send({data: branchCreate})
}


module.exports.createBranch = createBranch
