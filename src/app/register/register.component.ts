import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public translate: TranslateService,private router:Router) {translate.addLangs(['en', 'fr']);
  translate.setDefaultLang('en'); }
  
  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  goToLogin(){
    this.router.navigate(["/login"]);
  }
}
