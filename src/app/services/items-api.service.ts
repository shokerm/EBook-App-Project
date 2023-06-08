import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@models/baseUrl';


@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  constructor(private http: HttpClient) {

  }

  fetchItem() {
    return this.http.get(`${BASE_URL}/items`);
  }

}
