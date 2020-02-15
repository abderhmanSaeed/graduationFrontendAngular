import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-service-suggestion",
  templateUrl: "./user-service-suggestion.component.html",
  styleUrls: ["./user-service-suggestion.component.scss"]
})
export class UserServiceSuggestionComponent implements OnInit {
  services: any = [
    { name: "service1", img: "test" },
    { name: "service2", img: "test" },
    { name: "service3", img: "test" },
    { name: "service4", img: "test" },
    { name: "service5", img: "test" }
  ];
  constructor() {}

  ngOnInit(): void {}
}
