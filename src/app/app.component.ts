import { Component, HostListener } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import * as AOS from 'aos';
import { TweenLite, TweenMax, Power1 } from 'gsap';
import * as ScrollToPlugin from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private scrollTime: number;
  private scrollDistance: number;
  private scrollTop: number;
  private finalScroll: number;
  private delta: number;

  constructor() {
    AOS.init();
    AOS.refresh();
    new WOW().init();
  }

  @HostListener('window:scroll', [''])
  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {

    AOS.refresh();

    if (window.pageYOffset > 100) {
      document.getElementById('logo').style.visibility = 'hidden';
    } else {
      document.getElementById('logo').style.visibility = 'visible';
    }

    if (event) {
      this.scrollTime = 0.9;
      this.scrollDistance = 300;

      this.delta = event.wheelDelta / 120 || -event.detail / 3;

      this.scrollTop = window.pageYOffset;
      this.finalScroll = this.scrollTop - this.delta * this.scrollDistance;

      TweenMax.to(window, this.scrollTime, {
        scrollTo: {
          y: this.finalScroll,
          autoKill: true
        },
        ease: Power1.easeOut,
        autoKill: true,
        overwrite: 5
      });

    }


  }




}
