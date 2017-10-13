import {
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';
import {ApiService} from '../Apiservice/apiservice';
import {chatService} from '../Apiservice/chatservice';
import { ActivatedRoute } from '@angular/router';

@Component ({
	selector:'start-chat',
	templateUrl:'./startChat.html',
	styleUrls:['./startChat.css'],
	providers:[ApiService,chatService]
	
})
export class startChatComponent implements OnInit {
	messages:any;
	connection;
	message;
	private sub: any;
	reciever:string;
	sender:any;
	roomid:any;
	constructor(private apiservice:ApiService, private chatservice:chatService, private route: ActivatedRoute){}
	users: any;
	sendMessage(){
		console.log(">>>>>>>>>>>>>>>message",this.message);
		this.sender=localStorage.getItem('loginuser');
    this.chatservice.sendMessage({message:this.message,sender:this.sender,reciever:this.reciever,room_id:this.roomid});
    this.message = '';
  }
  ngOnInit() {
  	console.log(">>>>>>>>>>>>>>>>>....oninit calle")
   this.sub = this.route.params.subscribe(params => {
       this.reciever = params['name']; 
       this.roomid=params['roomid']; 
    });
    this.connection = this.chatservice.getMessages().subscribe(message => {
    	console.log(">>>>>>>>>>>.on init messages are",message);
      this.messages=message['text']
      console.log(">>>>>>>>>>>>>>>>>>>messages are",this.messages);
    })
  }
  // Let's unsubscribe our Observable
  ngOnDestroy() {
   this.sub.unsubscribe();
    this.connection.unsubscribe();
  }
}