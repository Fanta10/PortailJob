import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceTriCVService {

  constructor(private http: HttpClient) { }

  postTricv(resume_folder,job_path,keywords): Observable<any>{
    return this.http.post<any>('https://efaf-102-222-82-4.ngrok-free.app/cv/match', {}, {
      headers: {}, 
      params: {
        "resume_folder": resume_folder,
        "job_path": job_path,
        "keywords":keywords
      }
      
    } );
  }

   postTricv2(resume_folder,job_path,keywords,threshold): Observable<any>{
    return this.http.post<any>('https://efaf-102-222-82-4.ngrok-free.app/cv/match', {}, {
      headers: {}, 
      params: {
        "resume_folder": resume_folder,
        "job_path": job_path,
        "keywords": keywords,
        "threshold":threshold
      }
      
    } );
  }


}
