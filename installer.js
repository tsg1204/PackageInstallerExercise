//Package Installer Exercise

//input array
var inputArray = ['KittenService: ', 'Leetmeme: Cyberportrat', 'Cyberportrat: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: '];

//temp string to hold dependencies and packages
var tempPackAndDep = [];

//output string 
var output = [];

//cycle error
var cycleError = false;

//package installer to execute
function packageInstaller (input) {
    
    //loop through input array get packages without dependency
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
    //split input array, get only elements where package has dependency
    for (var i=0; i < input.length; i++) {
        var tempArray = input[i].trim().split(':');
        var tempPackage = tempArray[0].trim();
        var tempDependency = tempArray[1].trim();

        cycleError = false;
        //if package has dependency and it's not in the output, add to output
        if (tempDependency != '') {
            //if package already in the array and dependency not log an error 
            if(tempPackAndDep.indexOf(tempPackage) > -1 && tempPackAndDep.indexOf(tempDependency) != -1 ) {
                console.log('Cycle error - package: ' + tempPackage + ', dependency: ' + tempDependency);
                cycleError = true;
                return;
            }

            if(tempPackAndDep.indexOf(tempDependency) === -1) {
                tempPackAndDep.push(tempDependency);
            }

            if(tempPackAndDep.indexOf(tempPackage) === -1) {
                    tempPackAndDep.push(tempPackage);
            }
        };
    };

    if(cycleError) {
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

