import { browser, by, element } from 'protractor';

export class CurriculumVitaePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cv-root h1')).getText();
  }
}
