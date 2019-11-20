import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    private api: ApiService;

    constructor(
        private injector: Injector,
        private router: Router,
        ) {
        this.api = injector.get(ApiService);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            tap(() => { }, err => {
               console.log("erreur lors de la requete au serveur");
            })
        );
    }
}