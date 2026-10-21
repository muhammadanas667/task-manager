const express = require ('express')
const router = express.Router()
const Task = require('../models/Task')

router.get('/', async (req, res)=>{
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req, res)=>{
    try {
        const newTask = await new Task({
            title: req.body.title,
            description: req.body.description
        })

        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.put('/:id', async (req, res)=>{
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {completed: req.body.completed},      //React sends the completed:true in a PUT request
            {new: true}  //'new:true' without this Mongoose returns the OLD document before update. With it you get the updated version back.
        )

        if(!updatedTask){
            res.status(404).json({message: 'Task not found!'})
        }

        res.json(updatedTask)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/:id', async (req, res)=>{
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        if(!deleteTask){
            res.status(404).json({message: 'Task not found!'})
        }
        res.json(deleteTask)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router