import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadfileService {

  constructor(private http: HttpClient) { }
  download(url: string): Observable<Blob>{
    return this.http.get(url, {
      responseType:'blob'
    })
  }
}