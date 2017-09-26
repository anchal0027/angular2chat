import {
	Component
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms'
import {
	Http,
	Response
} from '@angular/http';
import {
	ApiService
} from '../Apiservice/apiservice';
import {Router} from '@angular/router';
@Component({
	selector: 'login',
	templateUrl: './login.html',
	styleUrls: ['./login.css'],
	providers: [ApiService]
})
export class LoginComponent {
	loginForm: FormGroup;
	errormessage: string;
	successmessage: string;
	showerrormessage: boolean = false;
	showsuccessmessage: boolean = false;
	user: string;
	constructor(private fb: FormBuilder, private apiservice: ApiService , private router:Router) {
		this.loginForm = fb.group({
			email: ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$')]],
			password: ['', Validators.required]
		})
	}
	login(value: any) {
		console.log("value", value);
		this.apiservice.login(value).subscribe((data) => {
			if (data.error) {
				this.showerrormessage = true;
				this.errormessage = data.message;
			} else {
				localStorage.setItem('token', data.token);
				localStorage.setItem('userid1', data.userid);
				localStorage.setItem('loginuser', data.username);
				this.showsuccessmessage = true;
				this.successmessage = data.message;
				this.user=data.username
				this.router.navigate(['/chatpage']);
			}
		})
	}
}