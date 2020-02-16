import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(userData) {
    userData.id = 100;
    this.auth.register(userData).subscribe(
      res => console.log,
      err => console.log
    );
  }
}
