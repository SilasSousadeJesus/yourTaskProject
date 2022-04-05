const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

module.exports = class userController {

    static async registerUser(req, res){

        try {
                   // criar com validatorJs
        // refatorar os status code

        const { name, email, password } = req.body;

        if(!name || name == null || name == ''){
            return res.status(404).json({message: 'empty nome field'})
        }
        if(!email || email == null || email == ''){
            return res.status(404).json({message: 'empty email field'})
        } 
        if(!password || password == null || password == ''){
            return res.status(404).json({message: 'empty password field'})
        }

        const emailExists = await User.findOne({email: email})
        if(emailExists){
            return res.status(404).json({message: 'existing email'})
        };

        const user = User({name, email, password});

        await user.save();

        res.status(200).json({message: "registered user"})

        } catch (error) {

            console.log(error)

        }

    }

    static async loginUser(req, res){

        const { email, password } = req.body;

        if(!email || email == null || email == ''){
            return res.status(404).json({message: 'empty email field'})
        }

        if(!password || password == null || password == ''){
            return res.status(404).json({message: 'empty password field'})
        }

        const user = await User.findOne({email: email}).select('+password') // .select('+password') recuperar a senha so neste momento para poder fazer as comparações
        if(!user){
        return res.status(404).json({message: 'User not found'})
        }

        const checkPassword =  await bcrypt.compare(password, user.password) 
        if(!checkPassword){
            return res.status(401).json({message: 'invalid password'})
        }

        try {
            const secret = process.env.SECRET
            const token = jwt.sign({id: user._id}, secret, {expiresIn: "20h"})
            res.status(200).json({message:"successful authentication", token })
        } catch (error) {
            res.status(400).json({message: `an error occurred on the server: ${error}` })
        }
    }

    static async findOneUser(req, res){
            
        const  id  = req.params.id
        
        const user = await User.findOne({_id:id})

        if(!user || user == null || user == ''){
            return res.status(404).json({message: 'user not found'})
        }

        return res.status(200).json(user)   
    }

    static async updateuser(req, res) {
            
        const {id} = req.params

        if(!id || id == null || id == ''){
            return res.status(404).json({message: 'ID not found'})
        }
        
        const {name, email } = req.body;
    
        if(name &&  email){
            try{
        
        await User.findByIdAndUpdate(id, { name, email })

        return res.status(200).json({message: 'user updated successfully'})
        
        } catch(err){

            res.status(404).json({ message: "User not found" });

        }

        }else {

            res.status(400).json({ message: "Required fields" });

        }

    }

    static async deleteUser(req, res){

        const { id } = req.params;

        if(!id || id == null || id == ''){
            return res.status(404).json({message: 'ID not found'})
        }
        
        try {
            await User.findByIdAndDelete(id);
            return res.status(200).json({message: 'deleted user'})
        } catch (err) {
            console.log(err)
            res.status(404).json({ message: "User not found" });
        }

    }

    static async showUsers(req, res) {
        
        const users = await User.find({raw:true})
        if(!users || users == null || users == ''){
            return res.status(400).json({message: "no registered users"})
        }
        return res.status(200).json(users)

    }

}