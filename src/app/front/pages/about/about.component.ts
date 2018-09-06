import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('About Us | MuskOwl');
    this.meta.addTag({
      // tslint:disable-next-line:max-line-length
      name: 'description', content: 'Hongkong\'s Top Company for Web & Mobile App Development, We specialize in web and mobile App development, Data Analysis, SEO and internet marketing services.'
    });
    this.meta.addTag({ name: 'author', content: 'MuskOwl LLP' });
    this.meta.addTag({ name: 'keywords', content: 'Top Web And Mobile App Development Company In Hong Kong' });
  }

  ngOnInit() {
  }

}
