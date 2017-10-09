var mongoose=require('mongoose');
const messageSchema=mongoose.Schema({
	sender:{
		type:String;
	},
	reciever:{
		type:String;
	},
	message:{
		type:String;
	}
})
module.exports=mongoose.model('messages',messageSchema);