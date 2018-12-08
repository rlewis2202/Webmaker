       import { Component, OnInit } from "@angular/core";
       import { UserService } from "../../../services/User.service.client";
       import { Router } from "@angular/router";
       import { User } from "../../../models/User.model.client";
         @Component ({
             selector: "app-login",
             templateUrl: "./login.component.html",
             styleUrls: ["./login.component.css"]
             })   
           export class LoginComponent implements OnInit { 
             User: User;           
             UserName: "";
             password: ""; 
             Users: "";
             _id: string;
             firstName: string;
             lastName: string;            
                  
           constructor(private UserService: UserService, private router: Router) {}
           ngOnInit() {}
            login() {
            const User: User = this.UserService.findUserByCredentials(this.UserName, this.password);
             if (User) {
            this.router.navigate(["User", User._id]);  //"User/:_id" + User._id
          } 
           //console.log(User);   
        }
        
      };
