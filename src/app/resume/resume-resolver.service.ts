import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Resume } from './resume';
import { ResumeService } from './resume.service';

@Injectable()
export class ResumeResolver implements Resolve<Resume> {
  constructor(private resumeService: ResumeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Resume> {
    return this.resumeService.getResume();
  }
}
