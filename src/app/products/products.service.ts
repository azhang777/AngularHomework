import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IProduct } from './iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  private url = "api/products/products.json";
  
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.url).pipe(
      tap(data => console.log("ALL:" + JSON.stringify(data))), //tap allows us to check the observable stream without transforming it. Like we are looking at it.
      catchError(this.handleError) //catchError is a observable operator that catches errors lol.
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      //A client side or network error occurred
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      // The response body may contain clues to what is wrong
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
