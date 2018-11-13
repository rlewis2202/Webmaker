import { Injectable } from '@angular/core';
import { WebsiteEditComponent } from "../Components/website/website-edit/website-edit.component";

//injecting service into module
@Injectable()
export class WebsiteService {
    constructor() {}
website = [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" }, 
    { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },  
    { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },  
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },  
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },  
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },  
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }  
]

  createWebsite(website) {
      website._id = Math.random().toString;
      this.website.push(website);
      return website;
  }
  findWebsiteByUser(userId) {
      let result = [];
      for (let i = 0; i < this.website.length; i++)   {
          if (( this.website[i].developerId = userId)) {
              result.push(this.website[i]);
          }
      }
      return result;
    }      

  findWebsiteById(websiteId) {
    for (let i = 0; i < this.website.length; i++) {
        if (this.website[i]._id === websiteId) {
            return this.website[i];
        } 
    }
}    
  updateWebsite(websiteId)  {
      const oldWeb = this.findWebsiteById(websiteId);
      const index = this.website.indexOf(oldWeb);
      this.website[index] = websiteId;
  }
  deleteWebsite(websiteId) {
      const website = this.findWebsiteById(websiteId);
      const index = this.website.indexOf(website);
      this.website.splice(index, 1) 
  }
}