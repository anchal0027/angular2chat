import {
	Component,
	OnInit
} from '@angular/core';
import {ApiService} from '../Apiservice/apiservice';
import {Router} from '@angular/router';
@Component ({
	selector:'chat-page',
	templateUrl:'./usersToChat.html',
	styleUrls:['./usersToChat.css'],
	providers:[ApiService]
	
})
export class usersToChatPageComponent{
	constructor(private apiservice:ApiService, private router:Router){}
	loginuser: string;
	users:any;
	senddata:any;
	userid1:string;
	result:any;
	ngOnInit(){
		this.loginuser=localStorage.getItem('loginuser');
		this.apiservice.getUsers().subscribe((user)=>{
			this.users=user;
			console.log("users are",this.users);
		})
	}
	startchat(value:string){
		console.log(">>>>>>>>>>>>>>>.value is",value);
		this.userid1=localStorage.getItem('userid1');
		this.senddata={userid1:this.userid1,userid2:value}
		this.apiservice.createroom(this.senddata).subscribe((result)=>this.result=result)
		this.router.navigate(['/startchat']);
	}
}