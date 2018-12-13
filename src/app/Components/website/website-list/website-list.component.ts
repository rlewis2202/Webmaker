     import { Component, OnInit } from "@angular/core";
     import { WebsiteService } from "../../../services/website.service.client";
     import { ActivatedRoute, Router } from "@angular/router";
     import { Website } from "src/app/models/website.model.client";
     @Component({  
      selector: "app-website-list",
      templateUrl: "./website-list.component.html",
      styleUrls: ["./website-list.component.css"]
      }) 
      export class WebsiteListComponent implements OnInit {
      websites: Website[];
      uid: string; 
      wid: string;
        Website: Website;
      constructor(  
        private websiteService: WebsiteService,
        private activatedRoute: ActivatedRoute,
        private router: Router
       ) {}
        
      ngOnInit() {
         this.activatedRoute.params.subscribe(
          (params) => {
              this.uid = params["uid"];
              this.wid = params["wid"]; 
              this.websiteService.findWebsiteById(this.wid);              
              this.websiteService.findWebsiteByUser(this.uid)
              .subscribe((websites: Website[]) => {
                this.websites = websites;
              }
              );
             });
           //console.log(this.websites);
        }  
    }     