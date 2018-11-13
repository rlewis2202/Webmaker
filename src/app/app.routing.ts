import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {LoginComponent} from "./Components/User/login/login.component";
import {RegisterComponent} from "./Components/User/register/register.component";
import { ProfileComponent } from "./Components/User/profile/profile.component";
import { WebsiteListComponent } from "./Components/website/website-list/website-list.component";
import { WebsiteNewComponent } from "./Components/website/website-new/website-new.component";
import { WebsiteEditComponent } from "./Components/website/website-edit/website-edit.component";
import { PageListComponent } from "./Components/page/page-list/page-list.component";
import { PageNewComponent } from "./Components/page/page-new/page-new.component";
import { PageEditComponent } from "./Components/page/page-edit/page-edit.component";
import { WidgetListComponent } from "./Components/widget/widget-list/widget-list.component";
import { WidgetChooserComponent } from "./Components/widget/widget-chooser/widget-chooser.component";
import { WidgetEditComponent } from "./Components/widget/widget-edit/widget-edit.component";
// Import all other components here





const APP_ROUTES : Routes = [

  { path : '', component: LoginComponent },
 { path : 'login' , component: LoginComponent },
 { path : 'register' , component: RegisterComponent },
 { path : 'user/:userId' , component: ProfileComponent },
 { path : 'user/:userId/website' , component: WebsiteListComponent },
 { path : 'user/:userId/website/new' , component: WebsiteNewComponent },
 { path : 'user/:userId/website/:wid' , component: WebsiteEditComponent },
 { path : 'user/:userId/website/:wid/page', component: PageListComponent },
 { path : 'user/:userId/website/:wid/page/new', component: PageNewComponent },
 { path : 'user/:userId/website/:wid/page/:pid', component: PageEditComponent },
 { path : 'user/:userId/website/:wid/page/:pid/widget', component: WidgetListComponent },
 { path : 'user/:userId/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent },
 { path : 'user/:userId/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent },
 // so on

];


// Export the routes as module providers

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);