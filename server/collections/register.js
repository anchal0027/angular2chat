var mongoose=require('mongoose');
var bcrypt = require('bcrypt');
const registerSchema=mongoose.Schema({
	email:{
		type:String,
		unique:true,
		required:true,
		trim:true
	},
	name:{
		type:String,
		required:true,
	},
	password:{
		type:String,
		required:true,
	},
	
});
registerSchema.pre('save', function (next) {
  var user = this;
  console.log(">>>>>>>>>>>>>>>...user is",user);
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
module.exports=mongoose.model("registeredUser",registerSchema);