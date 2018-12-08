  import { Component, OnInit } from "@angular/core";
  import { WidgetService } from "../../../services/widget.service.client";
  import { ActivatedRoute, Router } from "@angular/router";
  import { Type } from '@angular/compiler';
  import { Widget } from 'src/app/models/widget.model.client';
  @Component({
    selector: "app-widget-chooser",
    templateUrl: "./widget-chooser.component.html",
    styleUrls: ["./widget-chooser.component.css"]
  })
  export class WidgetChooserComponent implements OnInit {
   uid: string;
   wid: string;
   pid: string;
   widgetId: string;
   constructor(
     private activatedRoute: ActivatedRoute,
     private widgetService: WidgetService,
     private router: Router
     ) {}
   ngOnInit() {
     this.activatedRoute.params.subscribe(
       params => {
         this.uid = params["uid"];
         this.wid = params["wid"];
         this.pid = params["pid"];
         this.widgetId = params["wgid"];
       });
   }
   create(type)  {
      const widget = {
        widgetType: type, 
        pageId: this.pid        
      };  
      this.widgetService.createWidget(widget);
        const wgid = this.widgetService.widget[
        this.widgetService.widget.length - 1
      ]._id;       

      this.router.navigate(["User", this.uid, "website", this.wid, 
        "page", this.pid, "widget", wgid
      ]); 
      console.log("widget page works") 
   }
  }
