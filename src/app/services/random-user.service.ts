import { UserInfo, UserInfoDTO } from './../userInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, subscribeOn, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService{

  #apiUrl = "https://randomuser.me/api/";
  #howManyResults = "?results=1";
  test = 'https://randomuser.me/api/?results=1';
  #currentUserInfo: Subject<UserInfo> = new Subject();

  constructor(private http: HttpClient) {
  }

  getNewUserInfo(){
   this.http.get<UserInfoDTO>(this.test).pipe(take(1)).subscribe((res) => {
      this.#currentUserInfo.next(res.results[0]);
    })
  }

  getCurrentUserInfo(){
    return this.#currentUserInfo.asObservable();
  }
}
