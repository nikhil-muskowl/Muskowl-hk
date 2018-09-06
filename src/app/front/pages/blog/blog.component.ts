import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public loading = false;
  public records;
  public recordsTotal;
  public recordsFiltered;
  public banner;

  public meta_title = 'Blog';
  public meta_keyword = '';
  public meta_description = '';

  constructor(
    private spinner: NgxSpinnerService,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.getViewData(id);
    this.titleService.setTitle(this.meta_title);
    this.meta.addTag({ name: 'description', content: this.meta_description });
    this.meta.addTag({ name: 'keywords', content: this.meta_keyword });
    this.meta.addTag({ name: 'author', content: 'MuskOwl LLP' });
  }

  ngOnInit() {
  }

  public getViewData(id) {
    this.loading = true;
    this.blogService.getview(id).subscribe(
      response => {
        this.loading = false;
        this.records = response.data;
        this.banner = response.data.banner;
        this.meta_title = response.data.meta_title;
        this.meta_keyword = response.data.meta_keyword;
        this.meta_description = response.data.meta_description;

        this.titleService.setTitle(this.meta_title);
        this.meta.addTag({ name: 'description', content: this.meta_description });
        this.meta.addTag({ name: 'keywords', content: this.meta_keyword });
      },
      err => {
        this.loading = false;
        console.error(err);
      }
    );
    return id;
  }


}
