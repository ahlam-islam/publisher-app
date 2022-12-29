import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


headers = new HttpHeaders().set('Content-Type', 'application/json');


constructor(private httpClient: HttpClient) { }

// Show lists of item
list(apiUrl:string): Observable<any> {
  return this.httpClient.get(apiUrl).pipe(
    catchError(this.handleError)
  );
}
/**
 * get item by id
 * @param id
 * @param apiUrl
 * @returns
 */
getItem(id: any,apiUrl:string): Observable<any> {
  return this.httpClient.get(`${apiUrl}/${id}`).pipe(
    catchError(this.handleError)
  );
}
// Create new item
create(apiUrl:string,data: any): Observable<any> {
  return this.httpClient.post(apiUrl, data).pipe(
    catchError(this.handleError)
  );
}

/**
 * update item with given id
 * @param apiUrl
 * @param id
 * @param data
 * @returns
 */
update(apiUrl:string,id: any, data: any): Observable<any> {
  return this.httpClient.put(`${apiUrl}/${id}`, data).pipe(
    catchError(this.handleError)
  );
}

/**
 * delete item with given id
 * @param apiUrl
 * @param id
 * @returns
 */
delete(apiUrl:string,id: any): Observable<any> {
  return this.httpClient.delete(`${apiUrl}/${id}`).pipe(
    catchError(this.handleError)
  );
}


// Handle API errors
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};
}
