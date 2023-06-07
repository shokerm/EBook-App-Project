import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../models/Base_Url';
import { UserLoginForRequset, UserResponse } from '../models/LoginUsersModel';


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

  getUserService(id: string) {
    return this.http.get(`${BASE_URL}/Auth/getUser/${id}`);


  }




}


