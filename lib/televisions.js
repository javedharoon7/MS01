/**
 *
 * @namespace faker.televisions
 */
var televisions = function (faker) {
  var self = this;

  /**
   * brands
   *
   * @method faker.televisions.brands
   */
  self.brands = function() {
      return faker.random.arrayElement(faker.definitions.televisions.brands);
  };

  /**
   * platforms
   *
   * @method faker.televisions.platforms
   */
  self.platforms = function() {
      return faker.random.arrayElement(faker.definitions.televisions.platforms);
  };

  /**
   * prices
   *
   * @method faker.televisions.prices
   */
  self.prices = function() {
    return faker.random.arrayElement(faker.definitions.televisions.prices);     
};

}
module['exports'] = televisions;
