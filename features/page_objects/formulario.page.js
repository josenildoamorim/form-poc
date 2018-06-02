const { protractor, browser, element, by, $$, $ } = require('protractor')

const EC = require('protractor').ExpectedConditions

class Form {
  constructor () {
    this.body = $('body')
    // elemento do botão start que funciona no web, mas não no mobile.
    this.startBtn = element(by.xpath('//*[@id="2733134"]/div[1]/div/div[3]/div[1]'))
    // elemento do botão start que funciona no mobile, mas não no web.
    // this.startBtn = element.all(by.xpath("//*[contains(text(),'start')]")).get(2)
    this.nameField = $$('input').get(0)
    this.lastNameField = $$('input').get(1)
    this.emailField = $$('input').get(2)
    this.countrySelector = element.all(by.className('secondaryColor')).get(1)
    this.failMessage = $('.message ')
    this.sucessMessage = element(by.cssContainingText('.text', 'Thanks for completing this typeform'))
  }

  openPage () {
    browser.waitForAngularEnabled(false)
    return browser.get('https://stonepayments.typeform.com/to/yl5PKW')
  }

  startForm () {
    // load me impede de clicar e não consegui mapear 
    // o load para mandar o protractor aguardar por ele, logo usei sleep
    // sleep alto devido a demora no mobile. não consegui fazer o wait funcionar
    this.sleep(10000)
    return this.startBtn.click()

    // para iniciar no browser, foi complicado clicar no botão. apenas por xpath,
    // o que divergia do elemento no mobile e não podia mandar enter no mobile
    // return this.body.sendKeys(protractor.Key.ENTER)
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
    this.sleep(2000)
    this.countrySelector.sendKeys(country)
    return this.countrySelector.sendKeys(protractor.Key.ENTER)
  }

  clickRegister () {
    this.sleep(2000)
    return this.body.sendKeys(protractor.Key.ENTER)
  }

  waitForElement (element) {
    return browser.wait(EC.visibilityOf(element), 10000)
  }

  sleep (time) {
    return browser.sleep(time)
  }
}

module.exports = new Form()
