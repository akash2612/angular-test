import { ViewTransactionPage } from './viewtransaction.po';
import * as request from 'request'; 
import { browser } from 'protractor';

describe('View Transaction Page tests', () => {
  let page: ViewTransactionPage;
  beforeEach(() => {
    page = new ViewTransactionPage();
    page.navigateTo();
    browser.sleep(800);
  });

  it('Page is fetching correctily', () => {
    expect(page.getCard().isPresent()).toBe(true);
  });

  it('On click of Logout page navigates to Login', () => {
    page.getLogoutBtn().click().then(function() {
        browser.sleep(500);
        page.getLogoutConfirmBtn().click().then(function() {
            browser.waitForAngular();
            browser.sleep(500);
            expect(browser.driver.getCurrentUrl()).toMatch('/login');
        })
    })
  });

});
