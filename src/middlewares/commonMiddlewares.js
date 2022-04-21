

const mid4= async function ( req, res, next) {
   let headervalue=  await req.headers.isfreeappuser
   
   if(headervalue==undefined){
       res.send({error:"the request is missing a  mandatory header"})
   }
   else{
    if(headervalue === 'true'){
        headervalue=true
    }
    else{
        headervalue=false
    }
    req.isfreeappuser=headervalue
    next()
   }
}

// let freeAppUsercheck= function(req,res,next){
//     let headervalue=req.headers.isfreeappuser
//     if(!headervalue){
//         res.send({msg:})
//     }
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
module.exports.mid4= mid4
