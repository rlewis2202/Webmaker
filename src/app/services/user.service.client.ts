import { Injectable } from "@angular/core";
//import { User } from "../models/user.model.client";
//import { DefaultRouteReuseStrategy } from "@angular/router/src/route_reuse_strategy";

// Injectable service to Module
@Injectable() 
export class UserService {
    constructor() {}

     User = [
    {
        _id: "123",
     username: "alice",
      password: "alice",
       firstName: "Alice",
        lastName: "Wonder",
         email: "alice@gmail.com"},
    
    { _id: "234",
     username: "bob",
      password: "bob",
       firstName: "Bob",
        lastName: "Marley",
         email: "bob@whatever.com"},
    
    { _id: "345",
     username: "charly",
      password: "charly",
       firstName: "Charly",
        lastName: "Garcia",
         email: "charly@ulem.com"},
    
    { _id: "456",
     username: "shiyu",
      password: "shiyu",
       firstName: "Shiyu",
        lastName: "Wang",
         email: "swang@ulem.org"}
    
  ];
   createUser(User: any) {
       User._id = Math.random().toString;
       this.User.push(User);
       return User;
   }
   findUserById(userId: string) { 
       for (let x = 0; x < this.User.length; x++) {
           if (this.User[x]._id === userId) {
               return this.User[x];
           }
       }
   }
      findUserByUsername(username: string) { 
        for (let i = 0; i <this.User.length; i++) {
            if (this.User[i].username === username) {                
                 {
                return this.User[i];
            }
        }
    }
}    
    findUserByCredentials(username: string, password: string) {
            for (let i = 0; i < this.User.length; i++) {
                if (
                    this.User[i].username === username &&
                    this.User[i].password === password
                ) {
                    return this.User[i];
            }
        }
    }                       
    updateUser(User) {
        const oldUser = this.findUserById(User._id);
        const index = this.User.indexOf(oldUser);
        this.User[index] = oldUser; 
    }
}
