//Package Installer Exercise
var inputArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: '];

var invalidArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme'];

//package installer 
var packageInstaller;

packageInstaller = {
  installPackage: function(input) {
    //temp string to hold dependencies and packages
    var tempPackAndDep = [];

    //output string 
    var output = [];    

    if (!Array.isArray(input))
      throw new Error('Input is not an array');  

    if (input.length === 0)
        throw new Error('Input contains 0 packages');  

    for (var i=0; i < input.length; i++) {
        var tempArray = input[i].trim().split(':');
        var tempPackage = tempArray[0].trim();
        var tempDependency = tempArray[1].trim();

        //add packages without dependencies to the output first
        if(tempDependency === '') {

            if(output.indexOf(tempPackage) === -1) {
                output.push(tempPackage);
            }
        };

        //if package has dependency and it's not in the output, add to output
        if (tempDependency != '') {
            //if package already in the otput but it has a dependency which is not - cycle error 
            if((tempPackAndDep.indexOf(tempPackage) > -1 || output.indexOf(tempPackage) > -1 )
                && tempPackAndDep.indexOf(tempDependency) != -1 ) {
                throw new Error('Cycle error - package: ' + tempPackage + ', dependency: ' + tempDependency);
            }

            if(tempPackAndDep.indexOf(tempDependency) === -1) {
                tempPackAndDep.push(tempDependency);
            }

            if(tempPackAndDep.indexOf(tempPackage) === -1) {
                    tempPackAndDep.push(tempPackage);
            }
        };
    };

    //merge package and package with dependencies array
    output = output.concat(tempPackAndDep);

    var noDupe = Array.from(new Set(output));
    
    //print the output result
    console.log(noDupe);
    return noDupe;
  }
};

//run the package installer
packageInstaller.installPackage(inputArray);
//packageInstaller.installPackage(invalidArray);
//packageInstaller.installPackage(15);
//packageInstaller.installPackage([]);

module.exports = packageInstaller;


