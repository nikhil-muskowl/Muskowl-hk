import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadFormService {

  private headers = new HttpHeaders();
  private formData: FormData = new FormData();

  constructor(private http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public getType(): any {
    return this.http.get(ConfigService.BASE_URL + 'category/autocomplete');
  }

  public postData(data): any {
    this.formData.append('name', data.name);
    this.formData.append('email', data.email);
    this.formData.append('contact', data.contact);
    this.formData.append('company', data.company);
    this.formData.append('remarks', data.remarks);
    this.formData.append('categories', JSON.stringify(data.categories));
    return this.http.post(ConfigService.BASE_URL + 'category_quotation/ajax_post',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }



}
