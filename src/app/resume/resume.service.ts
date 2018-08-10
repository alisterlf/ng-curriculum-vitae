import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Resume } from './resume';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResumeService {
  private resumeUrl = 'api/resume';

  constructor(private http: HttpClient) { }

  getResume(): Observable<Resume> {
    return this.http.get(this.resumeUrl);
  }
}
