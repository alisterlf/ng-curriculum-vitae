import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material-module';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemResumeService } from './in-mem-resume.service';
import { ResumeService } from './resume/resume.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemResumeService),
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    MomentModule,
    AppRoutingModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
