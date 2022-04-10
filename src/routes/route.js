const express = require('express');
const logger = require('./logger')

const router = express.Router();

let players=[
{
    "name": "john",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
    },
    {
        "name": "harry",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "suraj",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]

router.post('/players', function (req,res){
    
     
    // let hello=(req.body.name===players.name)?"Player with same name already exist":players.push(req.body)
    //  res.send(  { players, status: true }  )
    // console.log(hello)
    if( players.find(item=>item.name===req.body.name)){
    res.send("player already exist with the same name")
    }else{
        players.push(req.body)
        res.send(  { data: players , status: true }  )

    }
 })


    
         
        
    
    
module.exports = router;
// adding this comment for no reason