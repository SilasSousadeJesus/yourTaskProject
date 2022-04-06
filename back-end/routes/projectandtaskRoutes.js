const { Router } = require("express");
const projectController = require("../controller/projectController");
const authMiddleware = require('../middlewares/auth');
 

const router = Router();

 // MIDDLEWARE PARA VERIFICAR VALIDADE DO TOKEN
router.use(authMiddleware)
router.get('/', projectController.listProjects);
router.get('/showproject/:projectId', projectController.showproject);
router.post('/create', projectController.createProject);
router.post('/updateProject/:projectId', projectController.updateProject);
router.delete('/deleteProject/:projectId', projectController.deleteProject);






module.exports = router;
