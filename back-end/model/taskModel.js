const { model, Schema, mongoose } = require("mongoose");

const TaskSchema = new Schema({
  name: {
     type: String,
     require: true,
   },
   completed: {
     type: Boolean,
     require: true,
     default: false
   },
   project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    require: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
   createAt:{
    type: Date,
    default: Date.now
}
 });
 
 module.exports = model("Task", TaskSchema);