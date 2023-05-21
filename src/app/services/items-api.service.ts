import { Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = "https://localhost:7254/api/items";
@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  constructor(private http: HttpClient) { 

  
  }

  fetchItem(){
   return this.http.get(BASE_URL);
  }
}
