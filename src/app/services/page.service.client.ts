   import { Injectable } from "@angular/core";
   import { Page } from "../models/page.model.client";
   import { Http, Response } from "@angular/http";
   import { map } from "rxjs/operators";
   import { environment } from "../../environments/environment";


   // Injectable service to Module
   @Injectable()
   export class PageService {
    constructor(private http: Http) {}

    baseUrl = environment.baseUrl;

          createPage(page) {
            const url = this.baseUrl + "api/page";
            return this.http.post(url, page).pipe
                (map((res: Response) => {
                    return res.json();
                  })
                  );
          }
          findPagesByWebsiteId(websiteId) {
            const url = this.baseUrl + "api/website/${websiteId}/page";
            return this.http.get(url).pipe
                (map((res: Response) => {
                    return res.json();
                  })
                 );
          }
          findPageById(pageId) {
            const url = this.baseUrl + "api/page/" + pageId;
            return this.http.get(url).pipe
                (map((res: Response) => {
                    return res.json();
                  })
                  );
              }
          updatePage(page) {
            const url = this.baseUrl + "api/page";
            return this.http.put(url, page).pipe
                (map((res: Response) => {
                    return res.json();
                  })
                  );
          }
          deletePage(pageId) {
            const url = this.baseUrl + "api/page/" + pageId;
            return this.http.delete(url).pipe
                (map((res: Response) => {
                    return res.json();
                  })
              );
        }}
