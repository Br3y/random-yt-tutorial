const asyncHandler = require('express-async-handler');
// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async(req, res) => {
    // console.log(req.body)
    if(!req.body.text){
        res.status(400)
        // .json({message: "Please add a new field"})
        throw new Error("Please add a new text field")
    }   
    res.status(200).json({message: 'Get Goals'}) 
})
// @desc Post Goals
// @route Post /api/goals
// @access Private
const setGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Set Goals'}) 
})
// @desc Update Goals
// @ronute Update /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Update Goals'}) 
})
// @desc Delete Goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Delete Goals'}) 
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}