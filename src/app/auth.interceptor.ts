import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private apiService: ApiService,
        private router: Router
    ) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('API-TOKEN');
        if (!!token) {
            req = req.clone({
                setParams: {
                    auth: token
                }
            });
        }
        console.log('interceptor');
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.apiService.logout();
                    this.router.navigate(['login']);
                    return throwError(error);
                })
            );
    }
}
