import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@models/baseUrl';
import { NewEdittedItem } from '@models/newEdittedItem';


@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  constructor(private http: HttpClient) {

  }

  getItem(id: number) {
    return this.http.get(`${BASE_URL}/items/${id}`);
  }

  fetchItem() {
    return this.http.get(`${BASE_URL}/items`);
  }

  deleteItem(id: number) {
    return this.http.delete(`${BASE_URL}/items/${id}`)
  }

  editItem(id: number, newEdittedItem: NewEdittedItem) {
    return this.http.put(`${BASE_URL}/items/${id}`, newEdittedItem);


  }

}
