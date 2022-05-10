import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from './userInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  #apiUrl = "https://randomuser.me/api/";
  #howManyResults = "?results=1";
  test = 'https://randomuser.me/api/?results=1';
  currentUserInfo: any;

  constructor(private http: HttpClient) {
    this.getUserInfo();
   }


  getUserInfo(){
    this.http.get(this.test).subscribe((res: any) => {
      this.currentUserInfo = res.results[0];
    })

  }

  getCurrentUserInfo(){
    this.getUserInfo();
    return this.currentUserInfo;
  }
}
