import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PageService } from "../../../services/page.service.client";
import { Page } from "../../../models/page.model.client";
 @Component({
  selector: "app-page-edit",
  templateUrl: "./page-edit.component.html",  
  styleUrls: ["./page-edit.component.css"]
 })
  export class PageEditComponent implements OnInit {
    uid: string;
    wid: string;
    pid: string;     
    page: Page;
   pages: { _id: string; name: string; websiteId: string; title: string; };
   constructor(
     private activatedRoute: ActivatedRoute, 
     private pageService: PageService,
     private router: Router
     ) { }

   ngOnInit() {
     this.activatedRoute.params.subscribe(
       params => {
         this.uid = params["uid"];
         this.wid = params["wid"];
         this.pid = params["pid"];
         this.pages = this.pageService.findPageById(this.pid);
       });     
   }
 update() {
   this.pageService.updatePage(this.page);
   this.router.navigate(["User", this.uid, "website", this.wid, "page"]);
 }

 Delete() {
   this.pageService.deletePage(this.pid);
   this.router.navigate(["User", this.uid, "website", this.wid, "page"]);
 } }
