  import { Component, OnInit } from '@angular/core';
  import { UserService } from 'src/app/services/User.service.client';
  import { Router } from '@angular/router';
  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
   })
   export class RegisterComponent implements OnInit {
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
           const newUser = {  
              UserName: this.UserName,
              password: this.password,
              verifyPassword: this.verifyPassword
          };
           const currentUser = this.userService.createUser(newUser);
           this.router.navigate(['User', currentUser._id]);        
        }
      } else {   
         this.userError = false;
         this.passwordError = true;           
         this.verifyPasswordError = true;
     }
    }  
   }
