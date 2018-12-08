      import { Component, OnInit } from "@angular/core";
      import { ActivatedRoute } from "@angular/router";
      import { UserService } from "../../../services/User.service.client";
      import { User} from "../../../models/User.model.client"
      @Component({
       selector: "app-profile",
       templateUrl: "./profile.component.html",
        styleUrls: ["./profile.component.css"]
        })
        export class ProfileComponent implements OnInit
        {
          constructor(
            private activatedRoute: ActivatedRoute,
            private userService: UserService) {} 
            User: User;                        
            uid: string;            
            UserName: string;   
            password: string;             
            oldUserName: string; 
            userError: boolean;  
            successFlag: boolean;
            Users: User[];        
             ngOnInit() {
                this.activatedRoute.params.subscribe(params => {            
                  this.uid = params["uid"];
                  this.User = this.userService.findUserById(this.uid);
                  this.oldUserName = this.User.UserName;            
              });            
            } 
          update()
              {
               if (this.User.UserName === this.oldUserName) {
                 this.userError = false;
                 this.successFlag = true;
                 this.userService.updateUser(this.User);   
                 } else{
                    const User: User = this.userService.findUserByUserName(this.User.UserName);
                    console.log(User);                               
                    if (User) {
                       this.userError = true; 
                       this.successFlag = false;
                    } else { 
                     this.userError = false;
                     this.successFlag = true; 
                     this.userService.updateUser(this.User);
                    }
                  } 
              }  
         };     
