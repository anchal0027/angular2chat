import {
	Component,
	OnInit
} from '@angular/core';
import {ApiService} from '../Apiservice/apiservice';
@Component ({
	selector:'start-chat',
	templateUrl:'./startChat.html',
	styleUrls:['./startChat.css'],
	providers:[ApiService]
	
})
export class startChatComponent{
	constructor(private apiservice:ApiService){}
	users: any;
	
}