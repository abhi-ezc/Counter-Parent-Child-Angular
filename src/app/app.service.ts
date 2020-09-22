import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) {}

  setData(data) {
    return this.http.post(this.url, { data });
  }

  getData() {
    return this.http.get(this.url);
  }
}
