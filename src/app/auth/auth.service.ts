import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  login(data: User) {
    console.log("login from servie", data);
    this.router.navigate(["/profile"]);
  }
  register(data: User) {
    console.log("Register from servie", data);
  }
}
