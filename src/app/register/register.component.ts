import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit(userData) {
    console.log('userData', userData);
    console.log('valid', userData.valid);
    if (userData.value.password === userData.value.confirmPassword && userData.valid) {
      this.apiService.register({
        firstname: userData.value.firstname,
        lastname: userData.value.lastname,
        email: userData.value.email,
        password: userData.value.password,
      }).subscribe(res => {
        console.log('register pesponse', res);
      });
    } else {
      console.log('Invalid Password');
    }

  }

}
