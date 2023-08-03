import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  url = 'http://localhost:3000/house'


  constructor(private http: HttpClient) { }

  Error: string[] = []

  cleanErrors() {
    this.Error = []
  };


  catalog(): Observable<any> {
    return this.http.get(`${this.url}/catalog`)
  }

  details(id: string): Observable<any> {
    return this.http
      .get(`${this.url}/details/${id}`)
      .pipe(catchError(this.handleError))
  }

  offer(id: string, data: any): Observable<any> {
    return this.http
      .post(`${this.url}/details/${id}`, data)
      .pipe(catchError(this.handleError))
  }

  closeOffer(id: string): Observable<any> {
    return this.http
      .get(`${this.url}/userAction/${id}`)
      .pipe(catchError(this.handleError))
  }

  userClosedOffers(): Observable<any> {
    return this.http
      .get(`${this.url}/closed`)
      .pipe(catchError(this.handleError))
  }

  create(data: any): Observable<any> {
    return this.http
      .post(`${this.url}/create`, data)
      .pipe(catchError(this.handleError))
  }

  edit(data: any, id: string): Observable<any> {
    return this.http
      .post(`${this.url}/edit/${id}`, data)
      .pipe(catchError(this.handleError))
  }

  delete(id: string): Observable<any> {
    return this.http
      .get(`${this.url}/delete/${id}`)
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
      throw error
    } else {
      throw error
    }
  }
}
