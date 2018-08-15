var assert = require('assert');
var _ = require('lodash');
var http = require("http");

var { startProxy, stopProxy, startTunnel } = require('./setup')

var options = {
  host: "127.0.0.1",
  port: 12345,
  path: "http://control.charles/session/export-json",
  headers: {
    Host: "control.charles"
  }
};

let sessionData

const downloadSessionData = () => {
  return http.get(options, function(res) {
    res.setEncoding('binary')
    var data = '';

    res.on('data', function(chunk) {
        data += chunk;
    });

    res.on('end', function() {
      sessionData = JSON.parse(data)
    });
    res.on('error', function(err) {
      console.log("Error during HTTP request");
      console.log(err.message);
    });

  }); 
}

describe('webdriver.io page', function() {

  // before(() => {
  //   stopProxy()
  //   startProxy()
  //   // startTunnel()
  // })

  // after(() => {
  //   stopProxy()
  // })

  // it('should be a pending test');

  it('should have the right title', function () {
      browser.url('/');
      var title = browser.getTitle();
      assert.equal(title, 'TBS Home Page | TBS.com');
  });

  describe('movie player', function()  {
    it('should goto the first movie url', function (){
      browser.url('/movies');
      const selector = '.icon-tbstnt_icon_play'
      // browser.waitForVisible(selector)
      browser.click(selector)
      browser.waitUntil(function(){
        const actual = browser.getUrl();
        const expected = '/movies/'
        const match = actual.match(expected).length > 0
        return match
      })
    })

    it('plays freeview movie', function () {
      const selector = '.icon-tbstnt_icon_play'
      // browser.waitForVisible(selector)
      browser.click(selector)
    })

    it('starts freeViewTimer', function () {
      // const selector = '.icon-tbstnt_icon_play'
      const selector = '.freeViewTimer'
      browser.waitForVisible(selector)
    })


    it('agrees to TOS', function () {
      const selector = '#toast-container > div'
      browser.waitForVisible(selector)
      browser.click(selector)
    })


    it('has tbs analytics', function () {
      downloadSessionData()
      // NOTE: timeout necessary to wait for download above
      setTimeout((() => {
        const match = _.find(sessionData, { host: "turnerresearch1.hb.omtrdc.net" })
        // console.log('MATCH', match)
        // console.log('Data', sessionData)
        assert.equal(true, !!match)
      }), 1000)
    })

  //   it('launches sign in modal', function () {
  //     const signInBtn = '.freeview--button'
  //     browser.waitForVisible(signInBtn)
  //     browser.click(signInBtn)
  //     const modal =('#mvpdpicker')
  //     browser.waitForVisible(modal)
  //   })
  //   it('Chooses AT&T U-Verse', function () {
  //     const attBtn = 'img[alt="AT&T U-verse"]'
  //     browser.waitForVisible(attBtn)
  //     browser.click(attBtn)
  //     browser.waitUntil(function(){
  //       const actual = browser.getUrl();
  //       const expected = 'loginprodx.att.net'
  //       const match = actual.match(expected).length > 0
  //       return match
  //     })
  //   })

  })



});
