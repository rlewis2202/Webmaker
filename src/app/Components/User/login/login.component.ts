import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/User.service.client";
import { Router } from "@angular/router";
@Component ({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
}) export class LoginComponent implements OnInit {
  User: any ={
    UserName: "",
    password: ""
  };   
  constructor(private UserService: UserService, private router: Router) {}
  ngOnInit() {}
  login() {
    this.User = this.UserService.findUserByCredentials(this.User.UserName, this.User.password);
     if (this.User) {
       this.router.navigate(["User/" + this.User._id]);
     }    
  }}  
