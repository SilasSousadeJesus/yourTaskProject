const { Router } = require("express");
const Project = require('../model/projectModel');
const Task = require('../model/taskModel');


module.exports = class taskController {

    static async createTask(req, res){

        const {projectId} = req.params;

        const projectcurrent = await Project.findById(projectId)
        if(!projectcurrent || projectcurrent == null || projectcurrent == ''){
            return res.status(404).json({message: 'project not found'})
        }

        try {

            const { name } = req.body;

            if(!name || name == null || name == ''){
                return res.status(404).json({message: 'empty name fields'})
            }

            const task = new Task({name, project: projectId, assignedTo: req.userId});
            
            await task.save()

            const project = await Project.findById(projectId)
            project.tasks.push(task)

            await project.save()
            
            return res.status(200).json({message: 'project created successfully'})

            } catch (error) {

            console.log(error)
            return res.status(400).json({error})
        }
        
    }

    static async listTask(req, res){

        try {
            const projectCurrent = await Project.findById(req.params.projectId).populate(['user', 'tasks'])
            if(!projectCurrent || projectCurrent == null || projectCurrent == ''){
                return res.status(404).json({message: 'project not found'})
            }

            const listTask = projectCurrent.tasks;

            return res.status(200).json(listTask)

        } catch (error) {
            console.log(error)
            return res.status(400).json({error});
        }

    

    }

    static async updateTask(req, res){

        const projectcurrent = await Project.findById(req.params.projectId)
        if(!projectcurrent || projectcurrent == null || projectcurrent == ''){
            return res.status(404).json({message: 'project not found'})
        }

        const { name } = req.body;

        if(!name || name == null || name == ''){
            return res.status(404).json({message: 'empty name fields'})
        }

        try {
            const task =  await Task.findByIdAndUpdate(req.params.taskId, {name}, {new: true})

            await task.save();

            return res.status(200).json({message: 'updated Task'})

        } catch (error) {

            return res.status(400).json(error)

        }
    }

     static async  updateStatus(req, res){

        const projectcurrent = await Project.findById(req.params.projectId)
        if(!projectcurrent || projectcurrent == null || projectcurrent == ''){
            return res.status(404).json({message: 'project not found'})
        }

        const { completed } = req.body;

        try {
            const task =  await Task.findByIdAndUpdate(req.params.taskId, { completed }, {new: true})

            await task.save();

            return res.status(200).json({message: 'updated Task'})

        } catch (error) {

            return res.status(400).json(error)

        }


    }
    static async deleteTask(req, res){

        const project = await Project.findById(req.params.projectId)

        if(!project || project == null || project == ''){
            return res.status(404).json({message: 'project not found'})
        }

    
        try {
            const task = await Task.findById(req.params.taskId);
            const project = await Project.findById(task.project);
            const taskRemove = project.tasks.indexOf(task._id);
            project.tasks.splice(taskRemove, 1);
            project.save();
            await Task.findByIdAndDelete(req.params.taskId);

            return res.status(200).json({message: "Task removed successfully"})
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }

}