import { UserInfo } from './../userInfo';
import { RandomUserService } from './../random-user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-dating',
  templateUrl: './dating.component.html',
  styleUrls: ['./dating.component.css']
})
export class DatingComponent implements OnInit {

  currentUserInfo: any;

  constructor(public randomUserService: RandomUserService) { }


  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    this.currentUserInfo = this.randomUserService.getCurrentUserInfo();
  }

}
