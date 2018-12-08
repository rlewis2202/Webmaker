  import { Component, OnInit } from "@angular/core";
  import { ActivatedRoute,Router } from "@angular/router";
  import { WidgetService } from "../../../../services/widget.service.client"
import { Widget } from 'src/app/models/widget.model.client';
  //import { PARAMETERS } from "@angular/core/src/util/decorators";
  @Component({
   selector: "app-widget-image",
   templateUrl: "./widget-image.component.html",
   styleUrls: ["./widget-image.component.css"]
  })
  export class WidgetImageComponent implements OnInit {
    uid: string;
    wid: string;
    pid: string;
    wgid: string;
    widget: Widget;
    widgets: { _id: string; widgetType: string; pageId: string; size: number; text: string; width?: undefined; url?: undefined; } | { _id: string; widgetType: string; pageId: string; width: string; url: string; size?: undefined; text?: undefined; };
   constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService
    ) { }
  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      this.uid = params["uid"];
      this.wid = params["wid"];
      this.pid = params["pid"];
      this.wgid = params["wgid"];
      this.widgets = this.widgetService.findWidgetById(this.wgid);
    });
  }

  update() {
    this.widgetService.updateWidget(this.widget);
    this.router.navigate([
      "User",
      this.uid,
      "website",
      this.wid,
      "page",
      this.pid,
      "widget"
    ]);
  }
  delete() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate ([
      "User",
      this.uid,
      "website",
      this.wid,
      "page",
      this.pid,
      "widget"
    ]);
  }
  }

