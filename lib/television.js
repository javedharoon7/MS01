/**
 *
 * @namespace faker.television
 */
var television = function (faker) {
  var self = this;

  /**
   * brand
   *
   * @method faker.television.brand
   */
  self.brand = function() {
      return faker.random.arrayElement(faker.definitions.television.brand);
  };

  /**
   * platform
   *
   * @method faker.television.platform
   */
  self.platform = function() {
      return faker.random.arrayElement(faker.definitions.television.platform);
  };

  /**
   * price
   *
   * @method faker.television.price
   */
  self.price = function() {
    return faker.random.arrayElement(faker.definitions.television.price);     
};

}
module['exports'] = television;
