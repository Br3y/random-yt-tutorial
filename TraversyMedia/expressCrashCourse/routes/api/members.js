const express = require("express")
const router = express.Router()
const members = require("../../Members")
const uuid = require("uuid")

// Get member
router.get('/', (req, res) => {
    res.json(members)
})

// Get Single member
router.get('/:id', (req, res) => {
    // res.send(req.params.id)
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }

})

// Create member
router.post('/', (req, res) => {
    // res.send(req.body)  
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }


    if (!newMember.name || !newMember.email) {
        res.status(400).json({msg:'Please include a name and email'} )
    }
    // members.save(newMember)
    members.push(newMember);
    res.json(members);
})


// Update member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        const updateMember = req.body
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember ? updateMember.name : member.name
                member.email = updateMember ? updateMember.email : member.email

                res.json({ msg: 'Member updated', member : member})
            }
        })
    } else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
})

// Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
        res.json({msg: 'Member Deleted', member: members.filter(member => member.id !== parseInt(req.params.id))})
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
})


module.exports = router