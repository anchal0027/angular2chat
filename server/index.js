let express=require('express');
let app=express();
let http=require('http').Server(app);
let io=require('socket.io')(http);
const connection=require('./db');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
const route=require('./routes');
var chatdetails=require('./collections/chatdetails');

app.use(bodyParser.json());
app.use(cors());
app.use('/api',route);
io.on('connection',(socket)=>{
	console.log('The user is connected',socket.id);
	socket.on('disconnect',function(){
		console.log('The user is Disconnected');
	});
socket.on('add-message',(message)=>{
	console.log(">>>>>>>>>>>>>>>message is",message);
	console.log("server message",message);
	var date=new Date();
	let newmsg= new chatdetails({
		sender:message.sender,
		reciever:message.reciever,
		message:message.message,
		date:date,
		roomid:message.room_id

	})
	newmsg.save((err,data)=>{
		if(err){
			  console.log("chat not saved");
			return next(err)
		}else {
			chatdetails.find({roomid:message.room_id}).sort({'date':1}).exec(function(err,chatdata){
					console.log(">>>>>>>>>>chatdata is",chatdata);
					io.emit('message',{
		type:'new-message',
		text:chatdata
	});
					
				})
	
					  console.log("chat saved");
				}
	})
	console.log(">>>>>>>>>>>>....new message ",newmsg);
	
})
// io.emit('message',{
// 		type:'new-message',
// 		text:"123"
// 	});
});
http.listen(4000,()=>{
	console.log('started on port 3000',connection);
})
