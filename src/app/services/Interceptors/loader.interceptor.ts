import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '@services/data.service';

import { Observable, delay, finalize } from 'rxjs';

@Injectable()
export class LoaderService implements HttpInterceptor {
    constructor(public dataService: DataService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.dataService.isLoading.next(true);

        return next.handle(req).pipe(


            finalize(
                () => {

                    this.dataService.isLoading.next(false);
                }

            )

        )
    }





}