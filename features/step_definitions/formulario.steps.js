const expect = require('chai').expect

const form = require('../page_objects/formulario.page.js')

const { Given, When, Then } = require('cucumber')

// GIVEN
Given('que eu tenha iniciado o formulário', {timeout: 90 * 1000}, function (callback) {
  form.startForm()
    .then(callback)
})

Given('que eu tenha preenchido meu nome e avançado', function (callback) {
  form.typeName('Jose')
  form.clickConfirm()
    .then(callback)
})

// WHEN
When('confirmo após preencher o nome', function (callback) {
  form.typeName('Jose')
  form.clickConfirm()
    .then(callback)
})

When('eu preencho os demais dados', function (callback) {
  form.typeLastName('Silva')
  form.typeEmail('jsilva@abc.com')
  form.selectCountry('Brazil')
    .then(callback)
})

When('finalizo o registro', function (callback) {
  form.clickRegister()
    .then(callback)
})

When('eu confirmo sem informar um campo obrigatório', function (callback) {
  form.typeName('')
  form.clickConfirm()
    .then(callback)
})

// THEN
Then('devo ver a opção de informar meu nome', {timeout: 90 * 1000}, function (callback) {
  form.nameField.isDisplayed().then(function (response) {
    expect(response).to.equal(true)
  })
    .then(callback)
})

Then('devo ver a opção de informar meu sobrenome', function (callback) {
  form.waitForElement(form.lastNameField)
  form.lastNameField.isDisplayed().then(function (response) {
    expect(response).to.equal(true)
  })
    .then(callback)
})

Then('devo ver uma mensagem de que o registo foi concluido com sucesso', function (callback) {
  form.waitForElement(form.sucessMessage)
  form.sucessMessage.isDisplayed().then(function (response) {
    expect(response).to.equal(true)
  })
    .then(callback)
})

Then('devo ver uma mensagem de aviso no campo obrigatório de que devo preenche-lo', function (callback) {
  form.failMessage.getText().then(function (response) {
    expect(response).to.equal('Please fill this in')
  })
    .then(callback)
})
