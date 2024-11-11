const { Given, When, Then } = require('@cucumber/cucumber')

  Given('Customer is located within {int} meters', function (distance) {
    // Given('Customer is located within {float} meters', function (float) {
    // Write code here that turns the phrase above into concrete actions
    console.log('Distance : ', distance)
    return 'complete';
  });

  When('Shopkeeper shouts {string}', function (message) {
    // Write code here that turns the phrase above into concrete actions
    console.log('Message : ', message)
    return 'complete';
  });

  Then('Customer hears Shopkeeper\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });