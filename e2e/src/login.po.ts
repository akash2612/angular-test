import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getForm() {
      return element(by.css('#loginForm'));
  }

  getEmail() {
      return element(by.css('input[formControlName=email]'));
  }

  getPassword() {
      return element(by.css('input[formControlName=password]'));
  }

  getSubmit() {
      return element(by.css('button[type=submit]'));
  }

}
