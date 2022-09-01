const assert = require('assert');
const { Given, When, Then} = require('@cucumber/cucumber');
const { defineSupportCode } = require('cucumber');
const { browser, $, element, ElementArrayFinder, by } = require('protractor');
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

async function starter() {
  //chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

  this.driver = new Builder()
        .forBrowser('chrome')
        .build();
  this.driver.wait(until.elementLocated(By.tagName('h1')));
  await driver.get("http://localhost:4200/");
  //await expect(browser.getTitle()).to.eventually.equal('TaGui');
  //await $("a[name='alunos']").click();
}

async function get_start_journey(){
  await this.driver.findElement({ id: 'searchText' });
}
async function click_start_journey(){
  this.driver.findElement({ id: 'searchText' }).click();
}

Given('I am at the configurations page',async function () {
  starter();
});
Given('I see a notifications history button',async function () {
  get_start_journey();
});
When('I click the click the notifications history button', function () {
  click_start_journey();
});
Then('I go to the notifications history page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('I see all my notification ever sent', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

After(async function() {
    await this.driver.close();
});

