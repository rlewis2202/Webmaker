import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routing } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Components/User/login/login.component";
import { RegisterComponent } from "./Components/User/register/register.component";
import { ProfileComponent } from "./Components/User/profile/profile.component";
import { WebsiteNewComponent } from "./Components/website/website-new/website-new.component";
import { WebsiteEditComponent } from "./Components/website/website-edit/website-edit.component";
import { WebsiteListComponent } from "./Components/website/website-list/website-list.component";
import { PageNewComponent } from "./Components/page/page-new/page-new.component";
import { PageListComponent } from "./Components/page/page-list/page-list.component";
import { PageEditComponent } from "./Components/page/page-edit/page-edit.component";
import { WidgetListComponent } from "./Components/widget/widget-list/widget-list.component";
import { WidgetHeadingComponent } from "./Components/widget/widget-edit/widget-heading/widget-heading.component";
import { WidgetImageComponent } from "./Components/widget/widget-edit/widget-image/widget-image.component";
import { WidgetChooserComponent } from "./Components/widget/widget-chooser/widget-chooser.component";
import { WidgetYoutubeComponent } from "./Components/widget/widget-edit/widget-youtube/widget-youtube.component";
import { WidgetEditComponent } from "./Components/widget/widget-edit/widget-edit.component";
import { UserService } from "./services/User.service.client";
import { WebsiteService } from "./services/website.service.client";
import { PageService } from "./services/page.service.client";
import { WidgetService } from "./services/widget.service.client";


@NgModule ({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageListComponent,
    PageEditComponent,
    WidgetListComponent,
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetChooserComponent,
    WidgetYoutubeComponent,
    WidgetEditComponent,
  ],  imports: [
    BrowserModule, FormsModule, HttpModule,
     Routing],
  providers: [UserService, WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
