import {
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';
import {ApiService} from '../Apiservice/apiservice';
import {chatService} from '../Apiservice/chatservice';
@Component ({
	selector:'start-chat',
	templateUrl:'./startChat.html',
	styleUrls:['./startChat.css'],
	providers:[ApiService,chatService]
	
})
export class startChatComponent implements OnInit {
	messages=[];
	connection;
	message;
	constructor(private apiservice:ApiService, private chatservice:chatService){}
	users: any;
	sendMessage(){
		console.log(">>>>>>>>>>>>>>>message",this.message);
    this.chatservice.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit() {
    this.connection = this.chatservice.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
  // Let's unsubscribe our Observable
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}