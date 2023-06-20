import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@models/baseUrl';
import { SaleItem } from '@models/saleItem';


@Injectable({
  providedIn: 'root'
})
export class SalesApiService {

  constructor(private http: HttpClient) { }


  getAllSales() {
    return this.http.get(`${BASE_URL}/Sales`);
  }

  getSale(id: number) {
    return this.http.get(`${BASE_URL}/Sales/${id}`);
  }

  addNewSale(saleItem: SaleItem) {
    return this.http.post(`${BASE_URL}/Sales`, saleItem);
  }

  deleteSale(id: number) {
    return this.http.delete(`${BASE_URL}/Sales/${id}`);
  }

  editItem(id: number, userToEdit: any) {
    return this.http.put(`${BASE_URL}/Sales/${id}`, userToEdit);
  }


}
