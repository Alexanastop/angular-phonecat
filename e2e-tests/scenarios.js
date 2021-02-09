'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function() {

  describe('phoneList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the phone list as a user types into the search box', function() {
      var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });

  });
  
    describe('rowNumber', function() {
    
      beforeEach(function() {
        browser.get('index.html');
      });
  
      it('should filter the row into the search box', function() {
        var row = element.all(by.repeater('i in [0, 1, 2, 3, 4, 5, 6, 7]'));
        var query = element(by.model('$ctrl.query'));
  
        expect([0, 1, 2, 3, 4, 5, 6, 7].count()).toBe(8);
  
        query.sendKeys('1');
        expect(phoneList.count()).toBe(1);
      });

    });

});
