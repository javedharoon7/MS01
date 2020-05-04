// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
console.log(faker.televisions.brands());
console.log(faker.televisions.platforms());
console.log(faker.televisions.prices());