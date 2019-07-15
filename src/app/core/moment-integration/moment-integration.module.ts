import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import {
  MatMomentDateModule,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import * as moment from 'moment';

registerLocaleData(localePt);

export function initializeMomentJs() {
  return () =>
    new Promise(resolve => {
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
    dayMonthYearLabel: 'D MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@NgModule({
  imports: [CommonModule, MatMomentDateModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMomentJs,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },

    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_FORMATS }
  ]
})
export class MomentIntegrationModule {}
