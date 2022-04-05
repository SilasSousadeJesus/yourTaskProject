const { Router } = require("express");
const userController = require("../controller/userController")

const router = Router();


router.post('/signup', userController.registerUser);
router.post('/signin', userController.loginUser);
router.get('/showUser/:id', userController.findOneUser)
router.post('/update/:id', userController.updateuser)
router.delete('/delete/:id', userController.deleteUser)
router.get('/show', userController.showUsers)


module.exports = router;
