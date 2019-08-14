import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private _localStorage: LocalStorageService,
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
        if (!!res.token) {
          this._localStorage.setItem('token', res.token);
        }
       // console.log('this._localStorage.', this._localStorage.getItem('token'));
      },
      err => {
        console.log('Error', err);
      });
  }

}
