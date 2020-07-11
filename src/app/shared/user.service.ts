import { Injectable } from '@angular/core';
import { User } from './user.model';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}

login(authCredentials) {
  return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
}