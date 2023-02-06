 const { model, Schema, mongoose } = require("mongoose");

const ProjectSchema = new Schema({
  name: {
     type: String,
     require: true,
   },
   description: {
     type: String,
     require: true
   },
   user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
     require: true
   },
   tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
   }],
   createAt:{
       type: Date,
       default: Date.now
   }
 });
 
 module.exports = model("Project", ProjectSchema);