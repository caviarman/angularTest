import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private apiService: ApiService) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const token = localStorage.getItem('API-TOKEN');
        if (!!token) {
            return true;
        } else {
            this.apiService.logout();
        }
    }
}
