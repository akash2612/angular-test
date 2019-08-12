import { LoginPage } from './login.po';
import * as request from 'request'; 
import { browser } from 'protractor';

describe('Login Page tests', () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });

  it('Login form is Valid', () => {
    page.getEmail().sendKeys('abc@abc.com');
    page.getPassword().sendKeys('abc123');
    
    let form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-valid');
  });

  it('Login form is Invalid', () => {
    page.getEmail().sendKeys('');
    page.getPassword().sendKeys('');
    let form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-invalid');
  });

  it('Email is Invalid', () => {
    page.getEmail().sendKeys('abc@abc');
    page.getPassword().sendKeys('abc123');
    let email = page.getEmail().getAttribute('class');
    expect(email).toContain('ng-invalid');
  });

  it('Request successful', done => {
      request('https://ngdemoapi.getsandbox.com/login',function(err,res,body) {
          expect(res.statusCode).toEqual(200);
        done();
      })
  });

  it('Login Successful', () => {
      page.getEmail().sendKeys('admin@admin.com');
      page.getPassword().sendKeys('admin');
      page.getSubmit().click().then(function() {
          browser.waitForAngular();
        //   browser.sleep(500);
        //   browser.executeScript('window.sessionStorage.getItem("loginSession");').then(function(res){
        //     console.log(res);
        //   });
        //   console.log(item);
          expect(browser.driver.getCurrentUrl()).toMatch('/main');
      });
  })

});
