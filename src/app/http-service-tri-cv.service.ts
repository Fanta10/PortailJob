import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceTriCVService {

  constructor(private http: HttpClient) { }

  postTricv(data: any): Observable<any>{
    return this.http.post<any>('https://4b55-102-222-82-4.ngrok-free.app/cv/match', data);
  }
}
