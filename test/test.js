var assert = require("assert");
var Installer = require("../installer");
//var sinon = require("sinon");

describe("Package Installer", function() {

  it('is an object', function() {
    expect(typeof packageInstaller).toBe('function');
  });

  //invalid input array
  var invalidArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme'];

  
})