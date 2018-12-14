 import { Injectable } from "@angular/core";
 import { WebsiteEditComponent } from "../Components/website/website-edit/website-edit.component";
 import { Website } from "../models/website.model.client";
 import { Http, Response } from "@angular/http";
 import { map } from "rxjs/operators";
 import { environment } from "../../environments/environment";
  //injecting service into module
 @Injectable()
    export class WebsiteService {
     website: any;
    constructor(private http: Http) {}

    baseUrl = environment.baseUrl;

  createWebsite(website: Website) {
    const url = this.baseUrl + "api/User/:uid/website";
    return this.http.post(url, Website).pipe
        (map((res: Response) => {
            return res.json();
          })
          );
      }
  findWebsiteByUser(userId: string) {
    const url = this.baseUrl + "api/User/${userId}/website";
    return this.http.get(url).pipe
        (map((res: Response) => {
            return res.json();
          })
          );
            }
  findWebsiteById(websiteId: string) {
    const url = this.baseUrl + "api/website/" + websiteId;
    return this.http.get(url).pipe
        (map((res: Response) => {
            return res.json();
          })
          );
   }
  updateWebsite(website: Website)  {
    const url = this.baseUrl + "api/website";
    return this.http.put(url, Website).pipe
        (map((res: Response) => {
            return res.json();
          })
          );
  }
  deleteWebsite(websiteId: string) {
    const url = this.baseUrl + "api/website/" + websiteId;
    return this.http.delete(url, this.website).pipe
        (map((res: Response) => {
            return res.json();
          })
      );
  }
}
