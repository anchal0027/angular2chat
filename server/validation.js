module.exports = {
    validateRegistration: (body, callback) => {
        console.log("password",body.password, body.confirmpassword);
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (body.name == null || body.name == "") {
            callback("empty username!!", "");
        }
       else if (body.email == null || body.email == "") {
            callback("empty email!!", "");
        }
        else if (body.password == null || body.password == "") {
            callback("empty password!!", "");
        }
        else if (body.confirmpassword == null || body.confirmpassword == "") {
            callback("empty confirmpassword!!", "");
        }
         else if (!(body.password == body.confirmpassword)) {
            callback("passwords do not match !", "");
            }
        
        else if (!(body.email.match(mailformat))) {
            callback("You have entered an invalid email address!", "");
}
		 
            else{
                 callback("", body);
            }
    }, 

    createroomvalidation:(body,callback)=>{
       if (body.userid1 == null || body.userid1 == "") {
            callback("user 1 id can't be empty!!", "");
        }
       else if (body.userid2 == null || body.userid2 == "") {
            callback("user 2 id can't be empty!!", "");
        } 
           else{
                 callback("", body);
            }
    }      
}