import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Resume } from './resume.model';
import { ResumeService } from './resume.service';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume$: Observable<Resume>;
  i18n: any;
  constructor(
    private resumeService: ResumeService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.resume$ = this.resumeService.getResume().pipe(
      tap((resume: Resume) => {
        this.titleService.setTitle(`${resume.basics.name} - Curriculum Vitae`);
      })
    );
    this.i18n = [
      {
        langCode: 'pt-br',
        dateFormat: 'dd/MM/yyyy',
        shortDateFormat: 'MMM/yyyy',
        summary: 'Sobre',
        education: {
          header: 'Formação',
          institution: 'Instituição',
          area: 'Formação',
          studyType: 'Titulação',
          startDate: 'Início',
          endDate: 'Término',
          gpa: 'Média',
          courses: 'courses'
        },
        awards: {
          header: 'Certificações',
          title: 'Título',
          date: 'Data',
          awarder: 'Instituição',
          summary: 'Resumo'
        },
        skills: 'Competências e especialidades',
        languages: 'Idiomas',
        projects: {
          header: 'Projetos',
          now: 'Atual',
          roles: 'Funções'
        },
        publications: 'Publicações',
        references: 'Recomendações',
        work: 'Experiência profissional',
        volunteer: 'Trabalho Voluntário',
        interests: 'Interesses'
      },
      {
        langCode: 'en',
        dateFormat: 'MM/dd/yyyy',
        shortDateFormat: 'MMM/yyyy',
        summary: 'About',
        education: {
          header: 'Education',
          institution: 'Institution',
          area: 'Area',
          studyType: 'Study type',
          startDate: 'Start date',
          endDate: 'End date',
          gpa: 'GPA',
          courses: 'courses'
        },
        awards: {
          header: 'Certifications',
          title: 'Title',
          date: 'Date',
          awarder: 'Institution',
          summary: 'Summary'
        },
        skills: 'Skills',
        languages: 'Languages',
        projects: {
          header: 'Projects',
          now: 'Now',
          roles: 'Roles'
        },
        publications: 'Publications',
        references: 'References',
        work: 'Work experience',
        volunteer: 'Volunteer',
        interests: 'Interests'
      }
    ][0];
  }
  public getFirstName(name: string): string {
    return name.split(' ')[0];
  }
  public getSurname(name: string): string {
    return name
      .split(' ')
      .splice(1)
      .join(' ');
  }
}
