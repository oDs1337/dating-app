import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private AccountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void{
    this.router.navigate(['']);
  }


}
