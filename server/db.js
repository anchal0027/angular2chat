const  mongoose=require('mongoose');
mongoose.connect('mongodb://anchal:java123@ds147864.mlab.com:47864/angular2chat');
mongoose.connection.on('connected', () => {
	console.log("connected to database");
});
mongoose.connection.on('error', (err) => {
	console.log("Error in connection");
})
module.exports=mongoose;