import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  login(data: User) {
    console.log("login from servie", data);
  }
  register(data: User) {
    console.log("Register from servie", data);
  }
}
