import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  title = 'Blogs';
  public loading = false;
  public pageStart = 0;
  public pageLength = 5;

  public model: any[] = [];

  public filterData;

  public records;
  public recordsTotal;
  public recordsFiltered;

  constructor(
    private spinner: NgxSpinnerService,
    private blogService: BlogService,
    private meta: Meta, private titleService: Title
  ) {
    this.titleService.setTitle('Blogs | MuskOwl');
    this.meta.addTag({
      // tslint:disable-next-line:max-line-length
      name: 'description', content: 'Hongkong\'s Top Company for Web & Mobile App Development, We specialize in web and mobile App development, Data Analysis, SEO and internet marketing services.'
    });
    this.meta.addTag({ name: 'author', content: 'MuskOwl LLP' });
    this.meta.addTag({ name: 'keywords', content: 'Top Web And Mobile App Development Company In Hong Kong' });
  }

  public getServerData() {
    this.filterData = { 'start': this.pageStart, 'length': this.pageLength };

    this.loading = true;

    this.blogService.getdata(this.filterData).subscribe(
      response => {
        this.loading = false;
        this.records = response.data.records;
        this.recordsTotal = response.data.recordsTotal;
        this.recordsFiltered = response.data.recordsFiltered;
        this.binddata();
      },
      err => {
        this.loading = false;
        // console.error(err)
      },
    );
  }

  binddata() {
    for (let index = 0; index < this.records.length; index++) {
      this.model.push({
        id: this.records[index].id,
        name: this.records[index].name,
        title: this.records[index].title,
        description: this.records[index].description,
        short_description: this.records[index].short_description,
        image: this.records[index].image,
        banner: this.records[index].banner,
        created_date: this.records[index].created_date,
        modified_date: this.records[index].modified_date
      });     
    }
  }

  ngOnInit() {
    this.getServerData();
  }


  onScrollDown() {
    if (this.pageStart < this.recordsFiltered) {
      this.pageStart += this.pageLength;
      this.getServerData();
    }

  }

  onScrollUp() {
    // this.getServerData();
  }

}
