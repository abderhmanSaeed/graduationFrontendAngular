import { environment } from "./../../environments/environment";
import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  login(data: User) {
    console.log("login from servie", data);
    const datas = JSON.stringify({
      UserName: "marwa",
      Email: "ibrahimgomaa@yahoo.com",
      Address: "ismailia",
      ProfilePicture: "woman.png",
      Password: "012345",
      RoleID: 2
    });
    //this.router.navigate(["/profile"]);
    return this.http
      .post(environment.baseUrl + "users", datas, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(tap(res => console.log(res)));
  }
  register(data: User) {
    console.log("Register from servie", data);
  }
}
