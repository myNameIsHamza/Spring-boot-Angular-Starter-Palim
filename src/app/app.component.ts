import { Component, OnInit, Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

/* @Injectable({
  providedIn: 'root'
}) */
export class AppComponent implements OnInit {

  username: string;
  password: string;
  message: any;
  isLoggedIn = false;

  constructor(private restapiService: RestapiService,private router:Router,private http: HttpClient ) { 
    

  }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(localStorage.getItem("allowString"));
  }


  logout() {
        this.restapiService.allow = false;
        localStorage.setItem("allowString", String(this.restapiService.allow));
        console.log("logout " +localStorage.getItem("allowString"));
        this.router.navigateByUrl('/login');
  }

}
