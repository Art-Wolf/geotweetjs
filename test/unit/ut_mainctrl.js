describe('Hello World ', function() {
  beforeEach(module('geotweet'));

  var MainCtrl, scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('says hello world!', function () {
    expect(scope.test).toEqual("Hello World");
  });
});
