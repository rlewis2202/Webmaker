 import { Component, OnInit } from "@angular/core"; 
 import { WebsiteService } from "../../../services/website.service.client";
 import { ActivatedRoute, Router } from "@angular/router";
 import { Website } from 'src/app/models/website.model.client';
import { WebsiteEditComponent } from '../website-edit/website-edit.component';
  @Component({
  selector: "app-website-new",
  templateUrl: "./website-new.component.html",
  styleUrls: ["./website-new.component.css"]
 })
 export class WebsiteNewComponent implements OnInit {
    _id: any;
    websites: any;
    uid: string;
    wid: string;
    Website: any;    
    name: string;
    description: string;    
    website: any;   
  constructor(
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.websiteService.findWebsiteById(this.wid);
      this.websiteService.findWebsiteByUser(this.uid)
      .subscribe((websites: Website[]) => {
        this.websites = Website;
      });       
     });  
  }
    createWebsite() {
      const Website: Website = {
      name: this.name,
      description: this.description,
      developerId: this.uid      
      };
      this.websiteService.createWebsite(Website).subscribe(
        (websites:Website) => {
         this.router.navigate(["User", this.uid, "Website"])
        });
       
    } }   
