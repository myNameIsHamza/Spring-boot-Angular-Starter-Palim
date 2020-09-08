import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public translate: TranslateService) {translate.addLangs(['en', 'fr']);
  translate.setDefaultLang('en'); }
  
  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
