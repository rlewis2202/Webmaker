  import { Component, OnInit } from "@angular/core";
  import { UserService } from "../../../services/User.service.client";
  import { Router } from "@angular/router";
import { stringify } from '@angular/core/src/util';
import { User } from "../../../models/User.model.client"
  @Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
   })
   export class RegisterComponent implements OnInit {
     User: string;
     uid: string;
     UserName: string;
     password: string;         
     verifyPassword: string;
    passwordError: boolean;
     userError: boolean;
    verifyPasswordError: boolean;
     constructor(private userService: UserService, private router: Router) {}  
    ngOnInit() {
    }      
    register() {
      if (this.password === this.verifyPassword) {
        const User = this.userService.findUserByUserName(this.UserName);
        if (User) {
          this.userError = true;
          this.passwordError = false;
          this.verifyPasswordError = true;
        } else {
          const newUser: User = {  
            UserName: this.UserName,
            password: this.password,
            firstName: "",
            lastName: "",
            email: "",

            //verifyPassword: this.verifyPassword 
          };         
          const currentUser: User = this.userService.createUser(newUser);
          this.router.navigate(['User', currentUser._id]);        
        }
      } else  {   
        this.userError = false;
        this.passwordError = true;           
        this.verifyPasswordError = false;
     }
    }  
   }
