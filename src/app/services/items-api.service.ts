import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@models/baseUrl';
import { NewEditedItem } from '@models/newEdittedItem';


@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  constructor(private http: HttpClient) { }

  getItem(id: number) {
    return this.http.get(`${BASE_URL}/items/${id}`);
  }

  fetchItem() {
    return this.http.get(`${BASE_URL}/items`);
  }

  addItem(newItem: NewEditedItem) {
    return this.http.post(`${BASE_URL}/items`, newItem);
  }

  deleteItem(id: number) {
    return this.http.delete(`${BASE_URL}/items/${id}`)
  }

  editItem(id: number, newEdittedItem: NewEditedItem) {
    return this.http.put(`${BASE_URL}/items/${id}`, newEdittedItem);
  }

}
