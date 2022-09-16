import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  Register(data:any){
    return this._http.post('http://localhost:8080/register',data)
  }
  Verify(data:any){
    return this._http.post('http://localhost:8080/login',data)
  }
  NewPassword(data:any){
    return this._http.post('http://localhost:8080/newpassword',data)
  }

}
