  import { Injectable } from "@angular/core";
  import { User } from "../models/user.model.client";
  import { Http, Response } from "@angular/http"; 
  import { map } from "rxjs/operators";
  import { environment } from "../../environments/environment";

   // injecting service into module
  @Injectable() 
   export class UserService {
     _id: any;
     get: any;
     res: string;
     Response: string;
       constructor(private http: Http) {} 

       baseUrl = environment.baseUrl;
  
       createUser(User: User) {  
         const url = this.baseUrl + "api/User";
         return this.http.post(url, User).pipe
             (map((res: Response) => {
                 return res.json();
               })
               );
              } 
       
     findUserById(UserId: string) {
         const url = this.baseUrl + "/api/User/:uid" + 
         UserId;
         return this.http.get(url).get(url).pipe(
             map((res: Response) => {
                 return res.json();
             })
         );
     }        
     findUserByUserName(UserName: string) {
        const url = this.baseUrl + "/api/User?UserName=" 
        + UserName;
         return this.http.get(url).pipe(
             map((res: Response) => {
                 return res.json();
               })
         );            
      }      

    findUserByCredentials(UserName: string, password: string) {
        const url = this.baseUrl + "/api/User?UserName=" 
        + UserName + "&password=" + password;
         return this.http.get(url).pipe(
             map((res: Response) => {
                 return res.json();
               })
         );                         
    }
   
    updateUser(User: User) {
       const url = this.baseUrl + "/api/User";
        return this.http.put(url, User).pipe(
         map((res: Response) => {
            return res.json();
          })        
    );
   }
 }
    
