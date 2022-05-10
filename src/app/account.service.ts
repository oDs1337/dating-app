import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { ACCUNTS } from './mock-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  #accountList: Account[] = [];
  #isLoggedIn = false;

  constructor(private router: Router) {
    this.getAccounts();
   }

  get isLoggedIn(){
    return this.#isLoggedIn;
  }

  getAccounts(): void{
    this.#accountList = ACCUNTS;
  }

  loginUser({username, password}: Account){
    this.#accountList.forEach(user => {
      if((username === user.username) && (password === user.password)){
        this.#isLoggedIn = true;
        this.router.navigate(['dating']);
      }
    })
  }

  logoutUser(): void{
    this.#isLoggedIn = false;
    this.router.navigate(['']);
  }
}
