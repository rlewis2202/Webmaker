   import { Component, OnInit } from "@angular/core";
   import { WebsiteService } from "../../../services/website.service.client";
   import { ActivatedRoute, Router } from "@angular/router";
   import { Website }  from "../../../models/website.model.client";
    @Component({
    selector: "app-website-edit",
    templateUrl: "./website-edit.component.html",
    styleUrls: ["./website-edit.component.css"]
     })
    export class WebsiteEditComponent implements OnInit {
    websites: Website[] = [
      {
        name:"",
        description: "",
        _id: "",
        developerId: "" }
    ];
    uid: string;
    wid: string;
    name: string;
    website: Website;
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
      this.websiteService.findWebsiteByUser(this.uid);
      this.websiteService.findWebsiteById(this.wid);
    });
    }
    update() {
    const newWeb: Website = {
    name: this.website.name,
    description: this.website.description,
    _id: this.wid,
    developerId: this.uid
    };
     this.websiteService.updateWebsite(newWeb).subscribe
     ((website: Website) => {
      this.Router.navigate(["User", this.uid, "Website"]);
     }
     );

  }
     delete() {
     this.websiteService.deleteWebsite(this.wid).subscribe
     ((websites: Website[]) => {
      this.Router.navigate(["User", this.uid, "Website"]);
     }
     );

   } }
