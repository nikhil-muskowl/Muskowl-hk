import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
  }
  

  ngOnInit() {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
  }

  openNav() {
    if (this.innerWidth < 800) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("main").style.marginRight = "0";
    } else {
      document.getElementById("mySidenav").style.width = "30%";
      document.getElementById("main").style.marginRight = "0";
    }
    // document.body.style.backgroundColor = "#333";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    // document.body.style.backgroundColor = "white";
  }

}
