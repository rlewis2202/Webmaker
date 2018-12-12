  import { Component, OnInit } from "@angular/core";
  import { UserService } from "../../../services/User.service.client";
  import { Router } from "@angular/router";
  //import { stringify } from '@angular/core/src/util';
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
     currentUser: any[];
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
          this.userError = false;
          this.passwordError = true;          
        } else {
          this.passwordError = false;
          this.userService.findUserByUserName
          (this.UserName).subscribe(
            (User: User) => {
              this.userError = true;
           },
           (error: any) => {
            const newUser: User = {  
              UserName: this.UserName,
              password: this.password,
              firstName: "",
              lastName: "",
              email: ""              
            }; 
            this.userService.createUser(newUser);     
           }
          )
          //this.userService((User: User) => {
           // this.userError = true;
          }     };
        } 
         // const currentUser: User = 
         // this.router.navigate(['User', currentUser._id]);        
//}
      //} else  {   
      //  this.userError = false;
      //  this.passwordError = true;           
//this.verifyPasswordError = false;
    // }
   // } 
  //}
