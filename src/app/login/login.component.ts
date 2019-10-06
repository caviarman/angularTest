import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(loginData) {
    console.log('loginData', loginData);
    console.log('valid', loginData.valid);
    this.apiService.login({
        email: loginData.value.email,
        password: loginData.value.password,
      }).subscribe(res => {
        console.log('login response', res);
        if (!!res.token) {
          localStorage.setItem('API-TOKEN', res.token);
          this.router.navigate(['admin/articles']);
        }
      });
  }

}
