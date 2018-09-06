import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Hong Kong based Top Web And Mobile App Development Company | MuskOwl');
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
