//import * as assert from 'assert';
import * as chai from 'chai'
const expectChai = chai.expect
const assert = chai.assert

chai.should();

describe('Website', function()
{
    it('should be alive', function()
    {
        browser.url('/')
        const img = $('img[src$="images/logotype.png"]')
        if(!img.isExisting()) {
            throw new Error('Website should be opened, and logo displayed');
        }
    })
})

describe("Chai", function()
{
    it("should", function()
    {
        browser.url('/');
        $("div").isDisplayed().should.to.be.contain("test");
    });

    it("expect", function()
    {
        browser.url('/')
        expectChai($("div").isDisplayed(), 'error message').to.be.true
    });

    it("assert", function() {
        browser.url('/')
        assert.isTrue($("div").isDisplayed(), 'error message')
    })
});

describe("WebDriverIO expect", function()
{
    it("expect", function()
    {
        browser.url('/')
        expect($("div")).not.toBeVisible;
    })
})