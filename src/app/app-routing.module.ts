import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ResumeResolver } from './resume/resume-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent,
    resolve: {
      resume: ResumeResolver
    }
  },
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: [ResumeResolver],
  exports: [RouterModule]
})
export class AppRoutingModule { }
