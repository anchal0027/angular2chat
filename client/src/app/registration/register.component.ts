import {
	Component
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
import {
	Router
} from '@angular/router';
 import {
	ApiService
 } from '../Apiservice/apiservice';
@Component({
	selector: 'register',
	templateUrl: './register.html',
	styleUrls: ['./register.css'],
	providers: [ApiService]
})
export class RegisterComponent {
	errormessage: string;
	successmessage: string;
	showerrormessage: boolean = false;
	showsuccessmessage: boolean = false;
	registerForm: FormGroup;
	data: any;
	constructor(private fb: FormBuilder,private router:Router,private apiservice:ApiService) {
		this.registerForm = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
			email: ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$')]],
			password: ['', Validators.required],
			confirmpassword: ['', Validators.required],
		})
	}
	submitForm(value: any) {
		console.log(">>>>>>>>>>.value", value);
		this.apiservice.register(value).subscribe((data) => {
			if (data.error) {
				this.showerrormessage = true;
				this.errormessage = data.message;
			} else {
				this.showerrormessage = false;
				this.showsuccessmessage = true;
				this.successmessage = data.msg;
				this.router.navigate(['/login']);
			}
		});
	}
}