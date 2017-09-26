let express=require('express');
let app=express();
let http=require('http').Server(app);
let io=require('socket.io')(http);
const connection=require('./db');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
const route=require('./routes');


app.use(bodyParser.json());
app.use(cors());
app.use('/api',route);
io.on('connection',(socket)=>{
	console.log('The user is connected',socket.id);
	socket.on('disconnect',function(){
		console.log('The user is Disconnected');
	});
socket.on('add-message',(message)=>{
	console.log("server message",message);
	io.emit('message',{type:'new-message',text:message});
})
});
http.listen(4000,()=>{
	console.log('started on port 3000',connection);
})
