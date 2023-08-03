import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  catchError } from 'rxjs'

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
      .pipe(catchError(this.handleError))
  }

  logout(data: any): Observable<any> {
    return this.http
      .get(`${this.url}/logout`)
  }

  login(data: any) {
    return this.http
      .post(`${this.url}/login`, data)
      .pipe(catchError(this.handleError))
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

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.  
      throw error
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.  
      throw error
    }

  }

}
