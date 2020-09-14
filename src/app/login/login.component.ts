import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message: any;
  isLoggedIn = false;





  constructor(private service: RestapiService, private router: Router,private appComponent :AppComponent) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem("allowString"))) {
      this.router.navigate(["/home"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }

  doLogin() {
    console.log("login call");
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      this.isLoggedIn = true;
      this.appComponent.isLoggedIn = this.isLoggedIn;
      this.router.navigate(["/home"]);

    });
  }


  doRegister() {
    this.router.navigate(["/register"])
  }
}
