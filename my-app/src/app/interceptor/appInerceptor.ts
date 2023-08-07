import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class AppIterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('user')

        if (
            req.url.includes('create') ||
            req.url.includes('edit') ||
            req.url.includes('delete') ||
            req.url.includes('closed') ||
            req.url.includes('details') ||
            req.url.includes('userAction') ||
            req.url.includes('logout')
        ) {
            if (token) {
                req = req.clone({
                    headers: new HttpHeaders({
                        'X-Authorization': token
                    })
                });
            }
        }


        return next.handle(req).pipe(
            catchError((err) => {
                console.log(err)
                return throwError(err)
            })
        )
    }
}


export const appInterceptorProvider: Provider = {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: AppIterceptor

}