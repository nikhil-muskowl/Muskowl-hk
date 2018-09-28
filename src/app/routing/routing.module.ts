import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../front/pages/home/home.component';
import { AboutComponent } from '../front/pages/about/about.component';
import { ContactComponent } from '../front/pages/contact/contact.component';
import { BlogsComponent } from '../front/pages/blogs/blogs.component';
import { BlogComponent } from '../front/pages/blog/blog.component';
import { OurServicesComponent } from '../front/pages/our-services/our-services.component';
import { OurProjectsComponent } from '../front/pages/our-projects/our-projects.component';
import { ProjectViewComponent } from '../front/module/project-view/project-view.component';
import { ServiceLeadComponent } from '../front/pages/service-lead/service-lead.component';

import { ServiceViewComponent } from '../front/module/service-view/service-view.component';

import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'service/:id', component: ServiceViewComponent },
  { path: 'our-projects', component: OurProjectsComponent },
  { path: 'project/:id', component: ProjectViewComponent },
  { path: 'service-lead', component: ServiceLeadComponent },
  { path: 'admin', component: AdminLoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
