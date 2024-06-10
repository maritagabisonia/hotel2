import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LoginUser } from '../../models/loginUser';
import { RoomsComponent } from '../rooms/rooms.component';
import { SearchRoomTypeComponent } from '../search-room-type/search-room-type.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule, RoomsComponent, SearchRoomTypeComponent, HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  visible: boolean = false;
  user: LoginUser = new LoginUser();


  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })


  constructor(private fb: FormBuilder, public userService: UserService) { }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  Login() {
    Object.assign(this.user, this.loginForm.value);
    console.log(this.loginForm.value)
    this.userService.login(this.user).subscribe({
      next: (response) => {
        console.log('user added successfully', response);
      },
      error: (error) => {
        console.error('Error adding user', error);
      }
    })

  }
}
