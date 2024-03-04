import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceCVService {

  constructor(private http: HttpClient) { }


  postCV(data :any) : Observable<any>{
    return this.http.post<any>('http://109.199.114.28:8000/upload/', data);
  }
}
