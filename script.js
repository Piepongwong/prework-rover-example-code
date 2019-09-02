// Rover Object Goes Here
// ======================
var aRoverObject = {
    direction: "N",
    position: [4,4],
    logs: []
}

// ======================
function turnLeft(rover){
    console.log("Turn left was called")
    switch(rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "E":
            rover.direction = "N";
            break;
        case "S":
            rover.direction = "E";
            break;  
        case "W":
            rover.direction = "S";
            break;
    }
}

function moveForward(rover){
    console.log("turnRight was called!");
    // save by value
    rover.logs.push([rover.position[0], rover.position[1]]);
    // save by reference (not what we want)
    // rover.logs.push(rover.position);

    switch(rover.direction) {
        case "N":
            //rover.position[1] = rover.position[1] + 1;
            rover.position[1]++;
            break;
        case "E":
            rover.position[0]++;
            break;
        case "S":
            rover.position[1]--;
            break;  
        case "W":
            rover.position[0]--;
            break;
    }
    checkBounds();
}

function checkBounds(rover) {
    if(
        rover.position[0] < 0 || rover.position[0] > 9 
        ||
        rover.position[1] < 0 || rover.position[1] > 9
    ) {
        alert("Out of bounds!")
        // rover.position = rover.logs[rover.logs.length - 1];
        // rover.splice(rover.logs.length - 1, 1);
        rover.position = rover.logs.pop();
    }
}

function turnRight(rover){
    console.log("moveForward was called")
    switch(rover.direction) {
        case "N":
            break;
        case "E":
            break;
        case "S":

            break;  
        case "W":
            
            break;
    }
}

function instructRover(commands, rover) {
    if(validateCommandString(commands)) {
        for(var i = 0; i < commands.length; i++) {
            switch(commands[i]) {
                case "l":
                    turnLeft(rover);
                    break;
                case "r":
                    turnRight(rover);
                    break;
                case "f":
                    moveForward(rover);
                    break;
                // default: 
                // alert(command[i] + " is not a command!");
                // return;
            }
        }
    } else {
       alert("Invalidate command string. The onlay valid commands are l, f, r, b")
    }
}

function validateCommandString(commands) {   
    for(var i = 0; i < commands.length; i++) {       
        if("flr".indexOf(commands[i]) === -1 ) {
            return false;
        }
    }   
    return true;
}

var rover2 = {
    direction: "N",
    position: [1,1]
}