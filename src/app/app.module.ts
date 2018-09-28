import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// front
import { HeaderComponent } from './front/common/header/header.component';
import { FooterComponent } from './front/common/footer/footer.component';
import { HomeComponent } from './front/pages/home/home.component';
import { AboutComponent } from './front/pages/about/about.component';
import { ContactComponent } from './front/pages/contact/contact.component';
import { MenuComponent } from './front/common/menu/menu.component';

// admin
import { AdminFooterComponent } from './admin/common/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin/common/admin-header/admin-header.component';
import { AdminMenuComponent } from './admin/common/admin-menu/admin-menu.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

// components
import { ContactFormComponent } from './front/module/contact-form/contact-form.component';

// services
import { ContactService } from './services/contact/contact.service';
import { BlogService } from './services/blog/blog.service';
import { ToastNotificationService } from './services/common/toast-notification.service';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { OurClientsComponent } from './front/module/our-clients/our-clients.component';
import { SubscribeFormComponent } from './front/module/subscribe-form/subscribe-form.component';
import { LeadFormComponent } from './front/module/lead-form/lead-form.component';
import { BlogsComponent } from './front/pages/blogs/blogs.component';
import { BlogComponent } from './front/pages/blog/blog.component';
import { ServiceLeadComponent } from './front/pages/service-lead/service-lead.component';
import { ServiceListComponent } from './front/module/service-list/service-list.component';
import { ProjectListComponent } from './front/module/project-list/project-list.component';
import { ProjectViewComponent } from './front/module/project-view/project-view.component';
import { ServiceViewComponent } from './front/module/service-view/service-view.component';
import { OurServicesComponent } from './front/pages/our-services/our-services.component';
import { OurProjectsComponent } from './front/pages/our-projects/our-projects.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    AdminLoginComponent,
    ContactFormComponent,
    OurClientsComponent,
    SubscribeFormComponent,
    LeadFormComponent,
    BlogsComponent,
    BlogComponent,
    ServiceLeadComponent,
    ServiceListComponent,
    ProjectListComponent,
    ProjectViewComponent,
    ServiceViewComponent,
    OurServicesComponent,
    OurProjectsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SnotifyModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    SwiperModule,
    MultiselectDropdownModule
  ],
  providers: [
    ContactService,
    BlogService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    ToastNotificationService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
