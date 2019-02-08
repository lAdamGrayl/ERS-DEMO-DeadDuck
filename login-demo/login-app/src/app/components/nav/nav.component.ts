import { Component, OnInit, Input } from '@angular/core';

import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router"
  "";
import {every} from "rxjs/operators";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() navItems: Array<{title: string}>;
  username: string;
  password: string;
  returnUrl: string;
   firstName: string;
   lastName: string;
   roles: string;

  constructor (private authService: AuthService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    const every= JSON.parse(localStorage.getItem(('authToken')));
    const firstName = document.getElementById('firstname').innerHTML =  every.firstName;
    const role = document.getElementById('roles').innerHTML =  every.roles;

  }
  refresh(): void{
    window.location.href = 'http://localhost:8080/login/';
  }


  Logout() {
    console.log(this.firstName, this.lastName);

    localStorage.removeItem('authToken');
    this.router.navigate([this.returnUrl]);
    window.location.reload();
  }

  getUser(){

    const every= JSON.parse(localStorage.getItem(('authToken')));
    const firstName = document.getElementById('display').innerHTML = 'firstName: ' + every.firstName;

    return document.getElementById('display').innerHTML = firstName;

  }
}
