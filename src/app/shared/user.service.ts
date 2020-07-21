import { Injectable } from '@angular/core';
import { User } from './user.model';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IfStmt } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

constructor(private http: HttpClient) { }

postUser(user: User){
  return this.http.post(environment.apiBaseUrl + '/register', user);
  }


login(authCredentials) {
 return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, );
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }


  getUserPayload() {
   const token = localStorage.getItem('token');
   if (token) {
    const userPayload = atob(token.split('.')[1]);
    return JSON.parse(userPayload);
   }
   else{
      return null;

  }

   isLoggedIn(){
   const userPayload = this.getUserPayload();
   if (userPayload) {
     return userPayload.exp > Date.now() / 1000;
   else 
     return false;

  }

  }
}
