import { Component, OnInit } from "@angular/core";
import { WidgetService } from "../../../services/widget.service.client";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser"
import { WidgetImageComponent } from "../widget-edit/widget-image/widget-image.component";
import { Widget } from 'src/app/models/widget.model.client';
@Component({
  selector: "app-widget-list",
  templateUrl: "./widget-list.component.html",
  styleUrls: ["./widget-list.component.css"]
})
export class WidgetListComponent implements OnInit {
  _id: string;
  uid: string;
  wid: string;      
  pid: string;    
    widgets: Widget[]; 
    widgetType: any;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private widgetService: WidgetService,
    private sanitizer: DomSanitizer
    ) { }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this._id = params["widget._id"];
        this.uid = params["uid"];
        this.wid = params["wid"];
        this.pid = params["pid"];
        this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
        this.widgetType = this.widgetService.findWidgetsByPageId(this.widget);
      });  
  }
  widget(widget: any): any {
    throw new Error("Method not implemented.");
  }
  parseYoutubeSrc(src) { 
   //Transfer video url into embeded video url
    let embedUrl: string = "https://www.youtube.com/embed/";
    const splitUrl: string[] = src.split("/");
    embedUrl += splitUrl[splitUrl.length - 1];

  // Telling browser this src is safe
  return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
}
}    
