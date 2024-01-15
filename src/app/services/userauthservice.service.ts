import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../datamodel/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserauthserviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/UserRegistr"
  // logurl="http://localhost:3000"


  userregisterapi(data:any){
    return this.http.post(this.url,data);
  }

  getuserdata():Observable<User[]>{
    return this.http.get<User []>(`${this.url}`);
  }

  loginUser(data: any) {

  }


}
