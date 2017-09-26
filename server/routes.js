const express=require('express');
const router=express.Router();
const Register = require('./collections/register');
const Room = require('./collections/createroom');
const validator=require('./validation');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register',(req,res,next)=>{
	validator.validateRegistration(req.body, function (err, data) {
		if (err) {
			res.json({
				error: 1,
				message: err,
				data: []
			});
			next(err);
		} else {
			let newUser = new Register({
				email: req.body.email,
				name: req.body.name,
				password: req.body.password,
				


			});
			console.log(">>>>>>>>>>>>new user",newUser);
			newUser.save((err, contact) => {
				if (err) {
					console.log("error is",err);
					res.json({
						error: 1,
						message: "User Details already exists"
					});
					return next(err)

				} else {
					res.json({
						success:true,
						msg: 'Registration successful'
					});
				}
			})
		}
	})
	
	})
router.post('/login',(req,res,next)=>{
		Register.findOne({email:req.body.email},(err,user)=>{
			console.log(user);
			if(err){
				throw err;
			}
			if(!user){
				res.json({error:true,message:"User not found!"});
			}
			else if(user){
				if(bcrypt.compareSync(req.body.password,user.password)){
					var token =jwt.sign({
						expiresInMinutes:60,
						data:user
					},'anchal');
					res.json({
					success: true,
					message: 'Login Success!',
					token: token,
					userid:user._id,
					username:user.name
				});
				}
				else{
					res.json({
					error: true,
					message: 'Authentication failed. Wrong password!'
				});

				}
			}
		})
	})
router.get('/getusers',(req,res,next)=>{
	Register.find((err,users)=>{
		if(err){
			res.json({error:true,message:"unable to find users!"});
		}
		else{
			res.json(users)
		}
	})
})
router.post('/createroom',(req,res,next)=>{
	console.log(">>>>>>>>>>>>>userid1",req.body.userid1)
	validator.createroomvalidation(req.body, function (err, data) {
		if (err) {
			res.json({
				error: 1,
				message: err,
				data: []
			});
			next(err);
		} 
		else {
			Room.findOne({userid1:req.body.userid1},(err,user)=>{
			

				console.log("usersssssssssssssssssssss",user)
			})
		}
		// else {
		// 	let newRoom = new Room({
		// 		userid1: req.body.userid1,
		// 		userid2: req.body.userid2,
				
		// 		});
		// 	console.log(">>>>>>>>>>>>new user",newRoom);
		// 	newRoom.save((err, contact) => {
		// 		if (err) {
		// 			console.log("error is",err);
		// 			res.json({
		// 				error: 1,
		// 				message: "NO room created"
		// 			});
		// 			return next(err)

		// 		} else {
		// 			console.log("room created");
		// 			res.json({
		// 				success:true,
		// 				msg: 'Room Created'
		// 			});
		// 		}
		// 	})
		// }
	})
})

module.exports=router;