import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Resume } from './resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumeUrl = '/assets/resume-pt-br.json';
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error}`);
      return of(result as T);
    };
  }

  getResume(): Observable<Resume> {
    return this.http
      .get<Resume>(this.resumeUrl)
      .pipe(catchError(this.handleError<Resume>('getResume', null)));
  }
}
