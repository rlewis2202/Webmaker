 import { Component, OnInit } from "@angular/core"; 
 import { WebsiteService } from "../../../services/website.service.client";
 import { ActivatedRoute, Router } from "@angular/router";
 import { Website } from 'src/app/models/website.model.client';
  @Component({
  selector: "app-website-new",
  templateUrl: "./website-new.component.html",
  styleUrls: ["./website-new.component.css"]
 })
 export class WebsiteNewComponent implements OnInit {
    websites: any[];
    uid: string;
    wid: string;
    name: string;
    description: string;
  constructor(
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.websites = this.websiteService.findWebsiteByUser(this.uid);       
     });  
  }
    createWebsite() {
      const website = {
      name: this.name,
      description: this.description,
      developerId: this.uid      
      };
      this.websiteService.createWebsite(Website);
      this.router.navigate(["User", this.uid, "website"]); 
    } }   
