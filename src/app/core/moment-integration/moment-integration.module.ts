import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

export function initializeMomentJs() {
  return () =>
    new Promise(function(resolve, reject) {
      moment.locale('pt-br');
      resolve();
    });
}
export const CUSTOM_FORMATS = {
  parse: {
    dateInput: 'L'
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMomentJs,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },

    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_FORMATS }
  ]
})
export class MomentIntegrationModule {}
