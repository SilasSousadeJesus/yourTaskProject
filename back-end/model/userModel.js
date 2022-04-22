const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  name: {
     type: String,
     required: true,
   },
   email: {
     type: String,
     unique: true,
     required: true,
   },
   password: {
     type: String,
     required: true,
     select:false
   },
   createAt:{
    type: Date,
    default: Date.now
}
 });

UserSchema.pre('save', async function(next){
   const passwordHash = await bcrypt.hash(this.password, 10);
   this.password = passwordHash
})
 
 module.exports = model("User", UserSchema);
