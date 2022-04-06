const Project = require('../model/projectModel')

module.exports = class projectController {

    static async  createProject(req, res){
            
        try {
            const { name, description } = req.body

            if(!name || name == null || name == ''){
                return res.status(404).json({message: 'empty nome field'})
            }
            if(!description || description == null || description == ''){
                return res.status(404).json({message: 'empty description field'})
            }
            const project = await Project.create({name, description, user: req.userId});
            return res.status(200).json({message: "project created successfully"})
        } catch (error) {
            return res.status(400).json({error})
        }
  
    }

    static async  listProjects(req, res){

        try {
            const projects = await Project.find().populate(['user', 'tasks']);

            if(!projects || projects == null || projects == ''){
                return res.status(404).json({message: 'there are no projects'})
            }

            return res.status(200).json(projects);

        } catch (error) {
            return res.status(400).json({error});
        }
      
    }

    static async  showproject(req, res){

        try {
            const id = req.params.projectId

            const project = await Project.findOne({_id:id}).populate(['user', 'tasks']);

            if(!project || project == null || project == ''){
                return res.status(400).json({message: "no registered project"})
            }
            return res.status(200).json(project);
            
        } catch (error) {
            console.log(error)
            return res.status(400).json(error);
        }
      
    }

    static async  updateProject(req, res){

        const { name, description} =  req.body;

        if(!name || name == null || name == ''){
            return res.status(404).json({message: 'name empty fields'})
        }

        if(!description || description == null || description == ''){
            return res.status(404).json({message: 'description empty fields'})
        }

        try {

            const project = await Project.findByIdAndUpdate(req.params.projectId, {name, description, user: req.userId}, {new: true});
 
            if(!project || project == null || project == ''){
                return res.status(404).json({message: 'project not found'})
            }

            await project.save()
 
             return res.status(200).json({message: "updated project"})

         } catch (error) {
  
             return res.status(400).json(error)
         }

    }

    static async  deleteProject(req, res){
  
        const project = await Project.findById(req.params.projectId)

        if(!project || project == null || project == ''){
            return res.status(404).json({message: 'project not found'})
        }

        try {
            await Project.findByIdAndDelete(req.params.projectId)
            return res.status(200).json({message: "project removed successfully"});  
        } catch (error) {
            return res.status(400).json({error});
        }

    }


}