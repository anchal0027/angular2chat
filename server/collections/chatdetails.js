var mongoose=require('mongoose');
const messageSchema=mongoose.Schema({
	sender:{
		type:String
	},
	reciever:{
		type:String
	},
	message:{
		type:String
	},
	date:{
		type:String
	},
	roomid:{
		type:String
	}

})
module.exports=mongoose.model('messages',messageSchema);