import { Injectable } from "@angular/core";
@Injectable() 
export class UserService
{ constructor() {}  
     User = 
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
     createUser(User: any)
    {  User._id = Math.random().toString(); 
       this.User.push(User); return User; } 
     findUserById(UserId: string)
    { for (let x = 0; x < this.User.length; x++)
        { if (this.User[x]._id === UserId)
           { return this.User[x]; }
        }
    }
     findUserByUserName(UserName: string)
    { for (let i = 0; i <this.User.length; i++) 
        { if
            (this.User[i].UserName === UserName)
            {                
              { return this.User[i];
              }  
            }  }  }    
    findUserByCredentials(UserName: string, password: string)
    { for (let i = 0; i < this.User.length; i++) { 
        if (this.User[i].UserName === UserName &&
              this.User[i].password === password) { 
                  return this.User[i]; }
        }  }                       
    updateUser(User)
    { const oldUser = this.findUserById(User._id);
       const index = this.User.indexOf(oldUser);
       this.User[index] = oldUser; } }
