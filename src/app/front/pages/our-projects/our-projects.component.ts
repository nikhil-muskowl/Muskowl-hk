import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})
export class OurProjectsComponent implements OnInit {

  public loading = false;
  public pageStart = 0;
  public pageLength = 6;

  public model: any[] = [];

  public filterData;

  public records;
  public recordsTotal;
  public recordsFiltered;


  constructor(private spinner: NgxSpinnerService, private projectService: ProjectService) { }

  public getServerData() {
    this.filterData = { 'start': this.pageStart, 'length': this.pageLength };

    this.loading = true;

    this.projectService.getdata(this.filterData).subscribe(
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
