var installer = require("../installer");
var chai = require("chai");
var expect = chai.expect;

describe("Package Installer", function() {
  it('1: Valid input test', function() {

    //valid input 
    var inputArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: '];
    var expectedOutput = [ 'KittenService', 'Ice', 'Cyberportrat', 'Leetmeme', 'CamelCaser', 'Fraudstream' ];
    var result = installer.installPackage(inputArray);

    expect(result).to.deep.equal(expectedOutput);   

  });
  it('2: Invalid input array test', function() {

    //invalid input array
    var invalidArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme'];
    var errorFunc = function() {
    	installer.installPackage(invalidArray);
    }

    expect(errorFunc).to.throw();

  });  
  it('3: Not array input test', function() {

    var value = 45;
    var errorFunc = function() {
    	installer.installPackage(value);
    }

    expect(errorFunc).to.throw();

  });
  it('4: Empty array input test', function() {

    var invalidArray = [];
    var errorFunc = function() {
    	installer.installPackage(invalidArray);
    }

    expect(errorFunc).to.throw();

  });
});