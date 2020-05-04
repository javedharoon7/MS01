if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("televisions.js", function () {
  
  });

  describe("brands()", function () {
      it("returns random brands", function () {
          sinon.stub(faker.televisions, 'brands').returns('Sony');
          var brands = faker.televisions.brands();

          assert.equal(brands, 'Sony');
          faker.televisions.brands.restore();
      });
  });

  describe("platforms()", function () {
    it("returns random televisions platforms", function () {
      sinon.stub(faker.televisions, 'platforms').returns('Flipkart');
          var platforms = faker.televisions.platforms();

          assert.equal(platforms, 'Flipkart');
          faker.televisions.platforms.restore();
      });
  });

  describe("prices()", function () {
      it("returns random televisions prices", function () {
          sinon.stub(faker.televisions, 'prices').returns('80000');
          var prices = faker.televisions.prices();

          assert.equal(prices, '80000');
          faker.televisions.prices.restore();
      });


  });
