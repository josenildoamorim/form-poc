const { protractor, browser, element, by, $$, $ } = require('protractor')

const EC = require('protractor').ExpectedConditions

class Form {
  constructor () {
    this.body = $('body')
    this.startBtn = element.all(by.cssContainingText('.button.general.full.enabled.hover-effect', 'start')).get(0)
    this.nameField = $$('input').get(0)
    this.lastNameField = $$('input').get(1)
    this.emailField = $$('input').get(2)
    this.countrySelector = element.all(by.className('secondaryColor')).get(1)
    this.failMessage = $('.message ')
    this.sucessMessage = element(by.cssContainingText('.text', 'Thanks for completing this typeform'))
  }

  startForm () {
    // browser.ignoreSynchronization = true
    browser.waitForAngularEnabled(false)
    browser.get('https://stonepayments.typeform.com/to/yl5PKW')
    browser.sleep(2000)
    // this.waitForElement(this.startBtn)
    return this.body.sendKeys(protractor.Key.ENTER)
  }

  typeName (name) {
    this.waitForElement(this.nameField)
    return this.nameField.sendKeys(name)
  }

  clickConfirm () {
    return this.body.sendKeys(protractor.Key.ENTER)
  }

  typeLastName (lastName) {
    this.waitForElement(this.lastNameField)
    return this.lastNameField.sendKeys(lastName)
  }

  typeEmail (email) {
    this.waitForElement(this.emailField)
    this.emailField.sendKeys(email)
    return this.emailField.sendKeys(protractor.Key.ENTER)
  }

  selectCountry (country) {
    browser.sleep(1000)
    this.countrySelector.sendKeys(country)
    return this.countrySelector.sendKeys(protractor.Key.ENTER)
  }

  clickRegister () {
    browser.sleep(3000)
    return this.body.sendKeys(protractor.Key.ENTER)
  }

  waitForElement (element) {
    return browser.wait(EC.visibilityOf(element), 6000)
  }
}

module.exports = new Form()
