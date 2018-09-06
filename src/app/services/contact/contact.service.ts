import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactService {

  private headers = new HttpHeaders();
  private formData: FormData = new FormData();

  constructor(private http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public getType(): any {
    return this.http.get(ConfigService.BASE_URL + 'contact_type/autocomplete');
  }

  public postData(data): any {
    this.formData.append('name', data.name);
    this.formData.append('email', data.email);
    this.formData.append('title', data.title);
    this.formData.append('description', data.description);

    return this.http.post(ConfigService.BASE_URL + 'contact/ajax_post',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  public postSubscribe(data): any {
    this.formData.append('email', data.email);
    return this.http.post(ConfigService.BASE_URL + 'newsletter/ajax_post',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }


}
