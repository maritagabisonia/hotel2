import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'register', component: RegisterFormComponent }

];
