import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{register} from 'src/app/Register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getUsers(): Observable<register> {
    return this.http.get<register>(this.URL + '/users') 
  }

  createUsers(users): Observable<register> {
    return this.http.post<register>(this.URL + '/users', JSON.stringify(users), this.httpOptions)
    
  }
}
