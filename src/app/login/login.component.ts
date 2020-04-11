import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../services/login-service.service';
import { UserLogin } from '../model/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginResult: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { 
    this.loginForm = formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userLogin: UserLogin) {
    this.loginService.sendLoginRequest(userLogin).subscribe(result => this.loginResult=result);
  }

}
