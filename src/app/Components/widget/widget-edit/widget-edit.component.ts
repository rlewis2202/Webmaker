   import { Component, OnInit } from "@angular/core";
   import { ActivatedRoute, Router} from "@angular/router";
   import { WidgetService } from "../../../services/widget.service.client";
   import { Widget } from "src/app/models/widget.model.client";
   @Component({
    selector: "app-widget-edit",
    templateUrl: "./widget-edit.component.html",
    styleUrls: ["./widget-edit.component.css"]
  })
    export class WidgetEditComponent implements OnInit {
       wgid: string;
       widget: Widget;
       widgetType: any[];
     Widget: { _id: string; widgetType: string; pageId: string; size: number; text: string; width?: undefined; url?: undefined; } | { _id: string; widgetType: string; pageId: string; width: string; url: string; size?: undefined; text?: undefined; };
    constructor(
       private activatedRoute: ActivatedRoute, 
       private widgetService: WidgetService,
       private router: Router
      ) {}  
    ngOnInit() {   
      this.activatedRoute.params.subscribe(params => {
      this.wgid = params["wgid"];
      this.Widget = this.widgetService.findWidgetById(this.wgid);      
      console.log(this.widget);
      });
  }

 }
