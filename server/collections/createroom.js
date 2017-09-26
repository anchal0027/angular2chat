var mongoose=require('mongoose');
const createRoomSchema=mongoose.Schema({
	userid1:{
		type:String,
		required:true,
		
	},
	userid2:{
		type:String,
		
		required:true,
	},
	
	
});

module.exports=mongoose.model("createrooms",createRoomSchema);