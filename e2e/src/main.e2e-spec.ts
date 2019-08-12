import { browser } from 'protractor';
import { MainPage } from './main.po';

describe('Main Page tests', () => {
  let page: MainPage;
  beforeEach(() => {
    page = new MainPage();
    page.navigateTo();
    browser.sleep(500);
  });

  it('On click of New Transaction page navigates to New Transaction', () => {
    page.getNewTransacBtn().click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/newtransaction');
    })
  });

  it('On click of View Transaction page navigates to View Transaction', () => {
    page.getViewTransacBtn().click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/viewtransaction');
    })
  });

});
