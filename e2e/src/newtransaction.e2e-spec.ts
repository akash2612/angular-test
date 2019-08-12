import { NewTransactionPage } from './newtransaction.po';
import * as request from 'request'; 
import { browser } from 'protractor';

describe('New Transaction Page tests', () => {
  let page: NewTransactionPage;
  beforeEach(() => {
    page = new NewTransactionPage();
    page.navigateTo();
    browser.sleep(800);
  });

  it('Reference Number is auto filled', () => {
      let reference = page.getRefNum().getAttribute('class');
      expect(reference).toContain('ng-valid');
  });

  // it('API Request for Save Transaction is working fine',done => {
  //   request('https://ngdemoapi.getsandbox.com/saveTransaction',function(err,res,body) {
  //       expect(res.statusCode).toEqual(200);
  //     done();
  //   })
  // })

  it('Submit Button is disabled when form is invalid', () => {
    let formEle = page.getForm().getAttribute('class');
    let btnele = page.getSubmitBtn().isEnabled();
    expect(formEle).toContain('ng-invalid');
    expect(btnele).toBeFalsy();
  })


  it('Customer Information is getting fetched properly', () => {
    page.getCusNum().sendKeys(23423);
    page.getCusName().click().then(function() {
      browser.sleep(1200);
      expect(page.getCusName().getAttribute('value')).toBeTruthy();
      expect(page.getCusAdd().getAttribute('value')).toBeTruthy();
      expect(page.getCusPhn().getAttribute('value')).toBeTruthy();
    })
  })

  it('Submit button is enabled and form is valid', () => {
    page.getCusNum().sendKeys(23423);
    browser.sleep(800);
    page.getTransAmt().sendKeys(1234);
    page.getTransCurr().sendKeys('MUR');
    page.getBeneBank().sendKeys('SBI');
    page.getBankAcc().sendKeys(12345678901234);
    page.getPaymentDt().sendKeys('Test');
    browser.sleep(1000);
    expect(page.getForm().getAttribute('class')).toContain('ng-valid');
    expect(page.getSubmitBtn().isEnabled()).toBeTruthy();
  })

  it('Transaction is submitted successfully with a success toaster message', () => {
    page.getCusNum().sendKeys(23423);
    page.getTransAmt().sendKeys(1234);
    page.getTransCurr().sendKeys('MUR');
    page.getBeneBank().sendKeys('SBI');
    page.getBankAcc().sendKeys(12345678901234);
    page.getPaymentDt().sendKeys('Test');
    browser.sleep(1000);
    page.getSubmitBtn().click().then(function() {
      // browser.sleep(5000);
      expect(page.getToaster().getText()).toEqual('Transaction submitted successfully!');
    })
  })

  it('Menu button is working', () => {
    page.getMenuBtn().click().then(function() {
      expect(page.getMenuBtn().getAttribute('class')).toContain('active');
    })
    page.getMenuBtnCLose().click().then(function() {
      expect(page.getMenuBtn().getAttribute('class')).not.toContain('active');
    })
  })

});
