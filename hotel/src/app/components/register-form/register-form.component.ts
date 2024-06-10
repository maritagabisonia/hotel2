import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RegisterUser } from '../../models/resgisterUser';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register-form',
  standalone: true,
  imports:
    [ReactiveFormsModule,
      FloatLabelModule,
      ButtonModule,
      InputTextModule,
      FormsModule
    ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  user: RegisterUser = new RegisterUser();


  userForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    avatar: ['', Validators.required],
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: [0, Validators.required]
  })

  constructor(private fb: FormBuilder, public userService: UserService) { }

  addUser() {
    Object.assign(this.user, this.userForm.value);
    console.log(this.userForm.value)
    this.userService.addUser(this.user).subscribe({
      next: (response) => {
        console.log('user added successfully', response);
      },
      error: (error) => {
        console.error('Error adding user', error);
      }
    })
  }
}
