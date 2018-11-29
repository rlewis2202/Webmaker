import { Injectable } from "@angular/core";
//import { User } from "../models/user.model.client";
import { createUrlResolverWithoutPackagePrefix } from "@angular/compiler";
//import { DefaultRouteReuseStrategy } from "@angular/router/src/route_reuse_strategy";

// Injectable service to Module
@Injectable() 
export class PageService {
    constructor() {}      
    
    pages =    [

            { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
          
            { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
          
            { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
          
          ];
          createPage(page) {
              page._id = Math.random().toString();
              this.pages.push(page);
              return page;
          } 
          findPagesByWebsiteId(website_id) {
              let result = [];
              for (let i = 0; i < this.pages.length; i++) {
                  if (this.pages[i].websiteId === website_id) {
                      result.push(this.pages[i]);
                  }
              }
              return result;
          }
          findPageById(pageId) {
              for(let i = 0; i < this.pages.length; i++) {
                  if(pageId === this.pages[i]._id){
                      return this.pages[i];
                  }
              }
              
              }
              updatePage(page) {
                  const oldPage = this.findPageById(page._id);
                  const index =this.pages.indexOf(oldPage);
                  this.pages[index] = page;
          }
          deletePage(pageId) {
              const oldPage = this.findPageById(pageId);
              const index = this.pages.indexOf(oldPage);
              this.pages.splice(index, 1);
          }
        }
    