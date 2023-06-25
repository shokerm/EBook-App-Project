import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '@models/baseUrl';
import { UserLoginForRequset, UserResponse } from '@app/interfaces/loginUsersModel';
import { Subject } from 'rxjs';
import { LocalStorageHandler } from '@models/localStorageHandler';
import { LocalStorageKey } from '@models/enums';
import { UserUpdateDTO } from '@models/userUpdateDTO';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user: any;
  loggedInUserChanged = new Subject();
  isLogin: boolean = false;

  refreshToken() {
    return this.http.post(`${BASE_URL}/Auth/refreshtoken`, {
      token: localStorage.getItem('token'),
      refreshToken: localStorage.getItem('refreshToken'),
      id: localStorage.getItem('id')
    });
  }

  loginService(email: string, password: string) {
    let userDeatilsToLogin: UserLoginForRequset = {
      email: email,
      password: password
    }
    return this.http.post<UserResponse>(`${BASE_URL}/Auth/login`, userDeatilsToLogin);
  }

  registerService(userName: string, email: string, password: string) {
    let newUser: UserUpdateDTO = {
      userName: userName,
      email: email,
      password: password
    }
    return this.http.post(`${BASE_URL}/Auth/register`, newUser);
  }

  getUserService() {
    return this.http.get(`${BASE_URL}/Auth/getUser/${LocalStorageHandler.getUserIdFromLocalStorage()}`);
  }
  getAllUsersService() {
    return this.http.get(`${BASE_URL}/Auth/getUsers`);

  }

  updateUserService(userUpdateDTO: UserUpdateDTO) {
    return this.http.put(`${BASE_URL}/Auth/updateUser/${LocalStorageHandler.getUserIdFromLocalStorage()}`, userUpdateDTO);
  }




}


