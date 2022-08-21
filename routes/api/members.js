const express = require('express')
const router = express.Router();
const Member = require('../../Member')
const uuid = require('uuid')
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

router.post('/',(req,res)=>{

    const newMember = {
        id : uuid.v4(),
        Name : req.body.Name,
        status : 'active'
    }
  if (!newMember.Name) {
    return res.status(400).json({msg : 'please provide a name'})
  }
  Member.push(newMember);
  res.json(Member);
});

// update member
router.put(('/:id'),(req,res)=>{
    // res.send(req.params.id)
    const found = Member.some(member=>member.id === req.params.id)
    if(found)
    {
        const updMember = req.body;
        Member.forEach(member=>{
            if (member.id === req.params.id) {
                member.Name =updMember.Name?updMember.Name : member.Name;
                res.json({msg: 'member updated', member})
            }
        })
    }
    else{
        res.status(400).json({msg:`No member with ${req.params.id} found`})
    }
})

// delete member
router.delete(('/:id'),(req,res)=>{
    // res.send(req.params.id)
    const found = Member.some(member=>member.id === req.params.id)
    if(found)
    res.json({msg: 'deleted member',Member :Member.filter(member=>member.id !==req.params.id)});
    else{
        res.status(400).json({msg:`No member with ${req.params.id} found`})
    }
})

module.exports = router