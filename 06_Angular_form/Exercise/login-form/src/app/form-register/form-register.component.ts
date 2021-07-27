import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Nga'},
    {id: 3, name: 'Mỹ'},
  ];
formRegister: FormGroup;
  constructor() {
    this.formRegister = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', []),
      age: new FormControl('', [Validators.min(18)]),
      country: new FormControl('', []),
      gender: new FormControl('', []),
      phone: new FormControl('', []),
    });
  }

  ngOnInit(): void {
  }

  add() {
    console.log(this.formRegister);
  }
}
