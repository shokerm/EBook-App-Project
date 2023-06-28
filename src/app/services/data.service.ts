import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {

  }

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isDarkMode: boolean = false;



}
