const { Router } = require("express");
const projectController = require("../controller/projectController");
const taskController = require("../controller/taskController");
const authMiddleware = require('../middlewares/auth');
 

const router = Router();

 // MIDDLEWARE PARA VERIFICAR VALIDADE DO TOKEN
router.use(authMiddleware)
router.get('/:userId', projectController.listProjects);
router.get('/showproject/:projectId', projectController.showproject);
router.post('/create', projectController.createProject);
router.post('/updateProject/:projectId', projectController.updateProject);
router.delete('/deleteProject/:projectId', projectController.deleteProject);


router.post('/:projectId/task/create', taskController.createTask);
router.get('/:projectId/task/', taskController.listTask);
router.post('/:projectId/task/update/:taskId', taskController.updateTask);
router.post('/:projectId/task/updateStatus/:taskId', taskController.updateStatus);
router.delete('/:projectId/task/delete/:taskId', taskController.deleteTask);



module.exports = router;
