   import { Component, OnInit } from '@angular/core';
   import { WebsiteService } from "src/app/services/website.service.client";
   import { ActivatedRoute, Router } from "@angular/router";
    @Component({
    selector: 'app-website-edit',
    templateUrl: './website-edit.component.html',
    styleUrls: ['./website-edit.component.css']
     })
    export class WebsiteEditComponent implements OnInit {
    websites: any[];
    uid: string; 
    wid: string; 
    name: string; 
    website;
    developerId: string;
    description: string;
    constructor(    
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private Router: Router
    ) {}
    ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.websites = this.websiteService.findWebsiteByUser(this.uid);
      this.website = this.websiteService.findWebsiteById(this.wid);
    });        
    }
    update() {
    const newWeb = {
    name: this.website.name,
    description: this.website.description,
    _id: this.wid,
    developerId: this.uid
    //console.log("Hello from page edit");
    };    
     this.websiteService.updateWebsite(newWeb);
     this.Router.navigate(["User", this.uid, "website"]);
  }
     delete() { 
     this.websiteService.deleteWebsite(this.wid);
     this.Router.navigate(["User", this.uid, "website"]);
   } }
