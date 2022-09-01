const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { defineSupportCode } = require('cucumber');
const { browser, $, element, ElementArrayFinder, by } = require('protractor');
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

async function isItFriday(today) {
  //chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

  this.driver = new Builder()
        .forBrowser('chrome')
        .build();
  await driver.get("http://localhost:4200/");
  //await expect(browser.getTitle()).to.eventually.equal('TaGui');
  //await $("a[name='alunos']").click();
}
Given('today is Sunday', async function () {
  this.today = 'Sunday';
  await isItFriday('Sunday');
});

