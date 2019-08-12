import { browser, by, element } from 'protractor';

export class ViewTransactionPage {
  navigateTo() {
    return browser.get('/viewtransaction');
  }

  getCard() {
      return element(by.css('.card-item'));
  }

  getLogoutBtn() {
      return element(by.css('.bs-btn.typ-logout'));
  }

  getLogoutConfirmBtn() {
      return element(by.css('#yesBtn'));
  }

}
