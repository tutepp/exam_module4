import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Awesome } from './awesome';

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {



  constructor(private http: HttpClient) { }



  getAwesome() : Observable<Awesome[]> {
    return this.http.get<Awesome[]>(`${environment.apiUrl}awesomes`);
  }
  deleteAwesome(id: number): Observable<Awesome[]> {
    return this.http.delete<Awesome[]>(`${environment.apiUrl}awesomes/${id}`);
  }
  updateAwesome(id: number, awesome:any): Observable<Awesome[]> {
    return this.http.put<Awesome[]>(`${environment.apiUrl}awesomes/${id}`, awesome,{headers: headers});
  }
  findById(id:number):Observable<Awesome[]> {
    return this.http.get<Awesome[]>(`${environment.apiUrl}awesomes/${id}`);
  }

}

