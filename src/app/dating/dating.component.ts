import { UserInfo } from './../userInfo';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map, Observable, subscribeOn, Subscription } from 'rxjs';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-dating',
  templateUrl: './dating.component.html',
  styleUrls: ['./dating.component.css']
})
export class DatingComponent implements OnInit, OnDestroy {

  currentUserInfo?: UserInfo;
  userInfoSubscription?: Subscription;

  constructor(private randomUserService: RandomUserService) { }


  ngOnInit(): void {
    this.getUserInfo();
    this.randomUserService.getNewUserInfo();
  }

  ngOnDestroy(): void {
    this.userInfoSubscription?.unsubscribe();
  }

  getUserInfo(): void {
    this.userInfoSubscription = this.randomUserService.getCurrentUserInfo()
      .subscribe((element) => {
        this.currentUserInfo = element;
      });
  }

  getNewUser(): void{
    this.currentUserInfo = undefined;
    this.randomUserService.getNewUserInfo();
  }

}
