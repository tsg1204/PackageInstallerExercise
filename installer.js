//Package Installer Exercise

//input array
var inputArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: '];

//temp string to hold dependencies and packages
var tempPackAndDep = [];

//output string 
var output = [];

//package installer to execute
function packageInstaller (input) {
    
    //loop through input array split the element to package and dependency if there is one
    //add to output packages without dependency first, add dependency before package if there is a dependency
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
    };

    for (var i=0; i < input.length; i++) {

        var tempArray = input[i].trim().split(':');
        var tempPackage = tempArray[0].trim();
        var tempDependency = tempArray[1].trim();

        //if package has dependency and it's not in the output, add to output
        if (tempDependency != '') {
            //if package already in the array and dependency not log an error 
            if(tempPackAndDep.indexOf(tempPackage) > -1 && tempPackAndDep.indexOf(tempDependency) != -1 ) {
                console.log('Cycle error - package: ' + tempPackage + ', dependency: ' + tempDependency);
            }

            if(tempPackAndDep.indexOf(tempDependency) === -1) {
                tempPackAndDep.push(tempDependency);
            }

            if(tempPackAndDep.indexOf(tempPackage) === -1) {
                    tempPackAndDep.push(tempPackage);
            }
        };
    };

    if(tempPackAndDep.indexOf(tempPackage) > -1 && tempPackAndDep.indexOf(tempDependency) != -1 ) {
        return;
    }
    else {
        //merge package and package with dependencies arrays
        output = output.concat(tempPackAndDep);

        var noDupe = Array.from(new Set(output));
        
        //print the output result
        console.log(noDupe);
    }
};

//run the package installer
packageInstaller(inputArray);

