import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../services/service/service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {

  public loading = false;
  public records;
  public recordsTotal;
  public recordsFiltered;
  public banner;

  public meta_title = 'Service';
  public meta_keyword = '';
  public meta_description = '';

  constructor(
    private spinner: NgxSpinnerService,
    private serviceService: ServiceService,
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
    this.serviceService.getview(id).subscribe(
      response => {
        console.log(response);
        this.loading = false;
        this.records = response.data;
        this.banner = this.records.banner;
        this.meta_title = this.records.meta_title;
        this.meta_keyword = this.records.meta_keyword;
        this.meta_description = this.records.meta_description;

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
