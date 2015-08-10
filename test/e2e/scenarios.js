'use strict';

describe('GeoTweet App', function() {

  it('should have a title', function() {
    browser.get('app/index.html');
    expect(browser.getTitle()).toEqual('GeoTweet');
  });
});

