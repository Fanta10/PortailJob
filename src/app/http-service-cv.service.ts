import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceCVService {

  constructor(private http: HttpClient) { }


  postCV(data :any) : Observable<any>{
    return this.http.post<any>('https://efaf-102-222-82-4.ngrok-free.app/upload/', data);
  }
}
