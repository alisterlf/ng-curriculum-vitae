import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Resume } from './resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumeUrl = 'https://api.myjson.com/bins/1h782x'; // URL to web api
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error}`);
      return of(result as T);
    };
  }

  getResume(): Observable<Resume> {
    return this.http.get<Resume[]>(this.resumeUrl).pipe(
      map((resumeList: Resume[]) => {
        return resumeList[1];
      }),
      catchError(this.handleError<Resume>('getResume', null))
    );
  }
}
