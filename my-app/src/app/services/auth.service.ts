import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = 'http://localhost:3000/auth'

  constructor(private http: HttpClient) { }
  Error: string[] = []

  cleanErrors() {
    this.Error = []
  }


  register(data: any): Observable<any> {
    return this.http
      .post(`${this.url}/register`, data)
  }

  logout(): Observable<any> {
    return this.http
      .get(`${this.url}/logout`)
  }

  login(data: any) {
    return this.http
      .post(`${this.url}/login`, data)
  }

  getError(data:any){
    if(Array.isArray(data)){
      this.Error = data
    }else if(typeof data == 'string'){
      this.Error = data.split('\n')
    }else if(typeof data == 'object'){
      this.Error = ['There seems to be a problem please try again later']
    }
  }

}
