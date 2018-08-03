var assert = require('assert');

describe('webdriver.io page', function() {

  it('should be a pending test');

  it('should have the right title', function () {
      browser.url('/');
      var title = browser.getTitle();
      assert.equal(title, 'TBS Home Page | TBS.com');
  });

  describe('movie player', function()  {
    it('should goto the first movie url', function (){
      browser.url('/movies');
      const selector = '.icon-tbstnt_icon_play'
      browser.click(selector)
      // console.log('actual', actual)
      browser.waitUntil(function(){
        const actual = browser.getUrl();
        const expected = '/movies/'
        const match = actual.match(expected).length > 0
        return match
      })
      
    })
    // it('plays freeview movie', function () {
    //   const selector = '.icon-tbstnt_icon_play'
    //   browser.click(selector)

    // })
  })



});
