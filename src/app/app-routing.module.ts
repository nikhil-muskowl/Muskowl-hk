import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  exports: [ RouterModule ],

  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  declarations: []
})
export class AppRoutingModule { }
