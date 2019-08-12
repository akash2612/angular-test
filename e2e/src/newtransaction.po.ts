import { browser, by, element } from 'protractor';

export class NewTransactionPage {
  navigateTo() {
    return browser.get('/newtransaction');
  }

  getRefNum() {
      return element(by.css('input[formControlName=reference]'));
  }

  getSubmitBtn() {
    return element(by.css('button[type=submit]'));
  }

  getForm() {
    return element(by.css('form'));
  }

  getCusNum() {
    return element(by.css('input[formControlName=cnumber]'));
  }

  getCusName() {
    return element(by.css('input[formControlName=cname]'));
  }

  getCusAdd() {
    return element(by.css('textarea[formControlName=address]'));
  }

  getCusPhn() {
    return element(by.css('input[formControlName=phnumber]'));
  }

  getTransAmt() {
    return element(by.css('input[formControlName=transferamt]'));
  }

  getTransCurr() {
    return element(by.css('mat-select[formControlName=currency]'));
  }

  getBeneBank() {
    return element(by.css('input[formControlName=bb]'));
  }

  getBankAcc() {
    return element(by.css('input[formControlName=baccnum]'));
  }

  getPaymentDt() {
    return element(by.css('input[formControlName=paydt]'));
  }

  getToaster() {
    return element(by.css('.toast-message'));
  }

  getMenuBtn() {
    return element(by.css('.menu-btn'));
  }

  getMenuBtnCLose() {
    return element(by.css('.menu-btn.active'));
  }

}
