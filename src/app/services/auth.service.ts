import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '@models/baseUrl';
import { UserLoginForRequset, UserResponse } from '@models/loginUsersModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private http: HttpClient) { }

  loginService(email: string, password: string) {
    let userDeatilsToLogin: UserLoginForRequset = {
      email: email,
      password: password
    }

    return this.http.post<UserResponse>(`${BASE_URL}/Auth/login`, userDeatilsToLogin);

  }

  registerService(userName: string, email: string, password: string) {
    let newUser = {
      userName: userName,
      email: email,
      password: password
    }
    return this.http.post(`${BASE_URL}/Auth/register`, newUser);
  }

  getUserService(id: string) {
    return this.http.get(`${BASE_URL}/Auth/getUser/${id}`);
  }




}


