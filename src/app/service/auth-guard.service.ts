import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RestapiService } from '../restapi.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private RestapiService: RestapiService) {

  }
  aallow: boolean;


  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  canActivate() {
    this.aallow = JSON.parse(localStorage.getItem("allowString"));
    if (this.aallow) {

      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}