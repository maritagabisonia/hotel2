import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/resgisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/loginUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users: RegisterUser[] = []

  constructor(private http: HttpClient) { }

  addUser(user: RegisterUser): Observable<any> {
    console.log(user)

    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<any>("https://ketiketelauri123-001-site1.jtempurl.com/api/account/register", user, httpOptions);
  }
  login(user: LoginUser) {
    console.log(user)

    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<any>("https://ketiketelauri123-001-site1.jtempurl.com/api/account/login", user, httpOptions);

  }
}
