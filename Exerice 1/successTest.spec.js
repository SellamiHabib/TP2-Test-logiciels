// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('insattest', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('insattest', async function() {
    await driver.get("http://localhost:63342/tp-test-logiciel/docs/assets/hello.html?_ijt=9t9fh4ujcmimjnkbnmc6u1r3t4&_ij_reload=RELOAD_ON_SAVE")
    await driver.manage().window().setRect(1546, 822)
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("test")
    await driver.findElement(By.css("button")).click()
    assert(await driver.findElement(By.id("message")).getText() == "Bonjour, test !")
  })
})
