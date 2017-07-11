//Package Installer Exercise

//input array
var inputArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: '];
//temp string to hold dependencies and packages
var tempPackAndDep = [];
//output string
var output = [];

var Toposort = require('toposort-class'),
    t = new Toposort();

//package installer to execute
function packageInstaller(input) {
    
    //try first toposort-class package, see if it works...
    //code goes here

    t.add('KittenService', ' ').add('Leetmeme', 'Cyberportrat');    

    //loop through input array split the element to package and dependency if there is one
    //add to output packages without dependency first
    //add dependency before package to a separate from output array
    for (var i=0; i < input.length; i++) {

        var tempArray = input[i].trim().split(':');
        var tempPackage = tempArray[0].trim();
        var tempDependency = tempArray[1].trim();

        //check if package has dependency if not add to the output
        if(tempArray.length != 0) {
            if(tempDependency === '') {

                if(output.indexOf(tempPackage) === -1) {
                    output.push(tempPackage);
                }
            };
        };
        //console.log(tempDependency);

    //if package has dependency and it's not in the output, add to output

    //if package already there log an error if not add dependency and the package to the output

    };

    //merge package and package with dependencies arrays

    //print the output result
    console.log(output);

    console.log(t.sort().reverse());

};

//run the package installer
packageInstaller(inputArray);

 
