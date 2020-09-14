import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
    user_name_session = 'authenticatedUser';
    authenticated = false;
    username : String;
    password : String;
    allow :boolean;
    test : string;
  constructor(private http:HttpClient) { }


    login(username:string,password:string){
        
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'}).pipe(map((res)=>{
        this.username = username;
        this.password = password;
        this.allow = true;
        localStorage.setItem("allowString", String(this.allow));
        console.log("indide " +localStorage.getItem("allowString"));
    },() => {
        this.allow = false;
        localStorage.setItem("allowString", String(this.allow));
        console.log("indide " +localStorage.getItem("allowString"));
        
      }));
      
    }


    isUserLoggedIn(){
        let allow = localStorage.getItem("allowString");
        if (allow === "false") return false
        else return true;

    }

    getUsers() {
        let username='hamza'
        let password='123'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        console.log("out " +localStorage.getItem("allowString"));
        return  this.http.get("http://localhost:8080/getUsers",{headers});  
    }
}
