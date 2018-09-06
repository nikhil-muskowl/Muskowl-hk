import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private headers = new HttpHeaders();
  private formData: FormData = new FormData();

  constructor(private http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public getdata(data): any {
    this.formData.append('start', data.start);
    this.formData.append('length', data.length);

    return this.http.post(ConfigService.BASE_URL + 'project/autocomplete',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  public getview(id: Number): any {
    return this.http.get(ConfigService.BASE_URL + 'project/ajax_view/' + id);
  }
}
