import { Injectable } from "@angular/core";
import { User } from "../models/user.model.client";
@Injectable() 
export class UserService
{ constructor() {}  
     Users: User[] = 
   [{ 
      _id: "123", UserName: "alice", password: "alice", firstName: "Alice",
        lastName: "Wonder", email: "alice@gmail.com"
    },    
    { _id: "234", UserName: "bob", password: "bob", firstName: "Bob",
        lastName: "Marley", email: "bob@whatever.com"
    },
    { _id: "345", UserName: "charly", password: "charly", firstName: "Charly", 
        lastName: "Garcia",  email: "charly@ulem.com"
    },    
    { _id: "456", UserName: "shiyu", password: "shiyu", firstName: "Shiyu",
        lastName: "Wang", email: "swang@ulem.org"
    }];
     createUser(User)
    {  User._id = Math.random().toString(); 
       this.Users.push(User); return User; } 
       
     findUserById(UserId)
    { for (let x = 0; x < this.Users.length; x++)
        { if (this.Users[x]._id === UserId)
           { return this.Users[x]; }
        } 
    }
     findUserByUserName(UserName)
    { for (let i = 0; i <this.Users.length; i++) 
        { if
            (this.Users[i].UserName === UserName)
            {                
              { return this.Users[i];
              }  
            }  }  }    
    findUserByCredentials(UserName, password)
    { for (let i = 0; i < this.Users.length; i++) { 
        if (this.Users[i].UserName === UserName &&
              this.Users[i].password === password) { 
                  return this.Users[i]; }
        }  }                       
    updateUser(User)
    { const oldUser = this.findUserById(User._id);
       const index = this.Users.indexOf(oldUser);
       this.Users[index] = oldUser; } }
