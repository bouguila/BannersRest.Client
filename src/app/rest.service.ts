import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://localhost:44360/api/';
const httpOptions = {
	headers: new HttpHeaders({
	'x-api-key':  'abcde1234',
	'content-type':  'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

	constructor(private http: HttpClient) { }
  
	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}

	getBanners(): Observable<any> {
	  return this.http.get(endpoint + 'Banner',httpOptions).pipe(
		map(this.extractData));
	}

	getBanner(id): Observable<any> {
	  return this.http.get(endpoint + 'Banner/' + id,httpOptions).pipe(
		map(this.extractData));
	}

	addBanner (banner): Observable<any> {
	  return this.http.post<any>(endpoint + 'Banner', JSON.stringify(banner), httpOptions).pipe(
		tap((banner) => console.log(`added banner w/ id=${banner.id}`)));
	}

	updateBanner (id, banner): Observable<any> {
	  return this.http.put(endpoint + 'Banner/' + id, JSON.stringify(banner), httpOptions).pipe(
		tap(_ => console.log(`updated banner id=${id}`)));
	}

	deleteBanner (id): Observable<any> {
	  return this.http.delete<any>(endpoint + 'Banner/' + id, httpOptions).pipe(
		tap(_ => console.log(`deleted banner id=${id}`)));
	}
	

}
