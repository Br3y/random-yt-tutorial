const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')
// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async(req, res) => {
    // console.log(req.body)
    const goals = await Goal.find() 

    res.status(200).json(goals) 
})
// @desc Post Goals
// @route Post /api/goals
// @access Private
const setGoals = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        // .json({message: "Please add a new field"})
        throw new Error("Please add a new text field")
    }  
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal) 
})
// @desc Update Goals
// @ronute Update /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json({updatedGoal}) 
})
// @desc Delete Goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    // My solution
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({deletedGoal}) 

    // Traversy Media Code
    // await goal.remove() // this does not work on me
    // res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}