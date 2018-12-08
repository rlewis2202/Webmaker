    import { Injectable } from "@angular/core";
    import { Widget } from "../models/widget.model.client";
    import { createUrlResolverWithoutPackagePrefix } from "@angular/compiler";
    import { DefaultRouteReuseStrategy } from "@angular/router/src/route_reuse_strategy";
      
     // Injectable service to Module
     @Injectable() 
     export class WidgetService {
       widget = [
           { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
           { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
           {
              _id: "345",
              widgetType: "IMAGE",
              pageId: "321",
              width: "40%",
              url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
           },
           { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
           { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
        ];
        
        createWidget(widget) {
           widget._id = Math.random().toString();
           this.widget.push(widget);
           return widget;
         }  
         findWidgetsByPageId(pageId) {
            let result = [];
            for (let i = 0; i < this.widget.length; i++) {
               if (pageId === this.widget[i].pageId) {
                 result.push(this.widget[i]);
              }
           }
          return result;
         }
         findWidgetById(widgetId) {
            for (let i = 0; i < this.widget.length; i++) {
               if ((widgetId = this.widget[i]._id)) {
                  return this.widget[i];
               }
           }          
         }
         updateWidget(widget) {
            const oldWidget = this.findWidgetById(widget._id);
            const index = this.widget.indexOf(oldWidget);
            this.widget[index] = widget;
         }
         deleteWidget(widgetId) {
            const oldWidget = this.findWidgetById(widgetId); 
            const index = this.widget.indexOf(oldWidget);
            this.widget.splice(index, 1);
         }
        }
 