import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LocalStorageService } from '../app/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private _localStorage: LocalStorageService
  ) { }

  intercept(req, next) {
    return next.handle();
    console.log('lllllllll', req);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._localStorage.getItem('token')}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
