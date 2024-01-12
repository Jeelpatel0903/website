import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  getuserdata(){
    return this.http.get(`${this.url}`);
  }

  loginUser(data: any) {
    
  }
  

}
