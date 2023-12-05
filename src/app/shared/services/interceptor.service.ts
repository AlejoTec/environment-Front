import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './loader.service';



@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private _loaderSrv: LoaderService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    this._loaderSrv.showLoader();

    let newRequest: any;

    if (localStorage.getItem('token')) {
      newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    }
    else {
      newRequest = request.clone();
    }

    // Continúa con la solicitud modificada.
    return next.handle(newRequest).pipe(
      finalize(
        () => {
          this._loaderSrv.hideLoader()
        }
      )
    );
  }
}

