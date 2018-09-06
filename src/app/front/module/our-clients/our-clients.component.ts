import { Component, OnInit, ViewChild } from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent implements OnInit {

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: false,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;


  constructor() { }

  ngOnInit() {
    this.config.scrollbar = false;
    this.config.navigation = false;

    this.config.pagination = this.pagination;
  }

}
