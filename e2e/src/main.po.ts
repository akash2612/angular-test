import { browser, by, element } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('/main');
  }

  getNewTransacBtn() {
      return element(by.css('#newtransactionBtn'));
  }

  getViewTransacBtn() {
      return element(by.css('#viewtransactionBtn'));
  }

}
