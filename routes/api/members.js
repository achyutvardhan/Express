const express = require('express')
const router = express.Router();
const Member = require('../../Member')
// const logger = require('../../middleWare/logger')
// app.use(logger);
router.get('/',(req,res)=>{
res.json(Member);
})
//--------------------------------------------------
//get Single member

router.get(('/:id'),(req,res)=>{
    // res.send(req.params.id)
    const found = Member.some(member=>member.id === req.params.id)
    if(found)
    res.json(Member.filter(member=>member.id === req.params.id));
    else{
        res.status(400).json({msg:`No member with ${req.params.id} found`})
    }
})


// create A member

router.post(('/'),(req,res)=>{
    res.send(req.body)
})
module.exports = router