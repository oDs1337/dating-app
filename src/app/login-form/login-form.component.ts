import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  loginPressed(value: Account){
    this.accountService.loginUser(value);
    console.log(value);
  }



}
