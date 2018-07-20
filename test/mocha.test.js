var assert = require('assert');

describe('webdriver.io page', function() {

  it('should be a pending test');

  it('should have the right title - the fancy generator way', function () {
      browser.url('/');
      var title = browser.getTitle();
      assert.equal(title, 'TBS Home Page | TBS.com');
  });

  it('should play a freeview movie', function (){
    browser.url('/movies');
    const selector = '.icon-tbstnt_icon_play'
    browser.click(selector)
    const actual = browser.getUrl();
    const expected = '/movies/'
    const match = actual.match(expected).length > 0
    assert.equal(match, true)
  })

});
