import { Injectable } from '@angular/core';

@Injectable()
export class UserRestService {

  private baseUrl: string = 'http://localhost:8081/ca/';

  constructor() {
  }

  register(registerData) {
    //return this.http.post(this.baseUrl +'register', registerData )
     // .map(response => response.json());
  }

  login(loginData) {
    //return this.http.post(this.baseUrl + 'login', loginData)
    //  .map(response => response.json());
  }





}
