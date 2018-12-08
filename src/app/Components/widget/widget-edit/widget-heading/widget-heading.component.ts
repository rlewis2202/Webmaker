import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { WidgetService } from "../../../../services/widget.service.client"; 
import { Widget } from "src/app/models/widget.model.client";

@Component({
  selector: "app-widget-heading",
  templateUrl: "./widget-heading.component.html",
  styleUrls: ["./widget-heading.component.css"]
})
export class WidgetHeadingComponent implements OnInit {  
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget;
  name: string;
  widgets: { _id: string; widgetType: string; pageId: string; size: number; text: string; width?: undefined; url?: undefined; } | { _id: string; widgetType: string; pageId: string; width: string; url: string; size?: undefined; text?: undefined; };
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private WidgetService: WidgetService 
    ) { }

  ngOnInit() { 
    this.activatedRoute.params.subscribe(
      (params) => {
        this.uid =params["uid"];
        this.wid =params["wid"];
        this.pid =params["pid"];
        this.wgid =params["wgid"];
        this.widgets = this.WidgetService.findWidgetById(this.wgid);
      }) 
  }
  private newMethod() {
    return this;
  }

  update() {
    this.WidgetService.updateWidget(this.widget);
    this.router.navigate([
      "User",
      this.uid,
      "website",
      this.pid,
      "widget"
    ]);
  }

  delete() {
    this.WidgetService.deleteWidget(this.wgid);
    this.router.navigate ([
      "User",
      this.uid,
      "website",
      this.pid,
      "page",
      this.pid,
      "widget"
    ]);
  }
}
