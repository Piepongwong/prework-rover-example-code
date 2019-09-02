function RoverConstructor(game) {
        game.rovers.push(this); // We are adding the rover being created to the game object.
        this.direction =  "N"; // The keyword this refers to the rover object currently being created
        this.position = [4,4];
        this.logs = [];
        this.turnLeft = function(){
            var somevar = "local";
            console.log("Turn left was called")
            switch(this.direction) {
                case "N":
                    this.direction = "W";
                    break;
                case "E":
                    this.direction = "N";
                    break;
                case "S":
                    this.direction = "E";
                    break;  
                case "W":
                    this.direction = "S";
                    break;
            }
        };
        this.turnRight = function(){
            console.log("moveForward was called")
            switch(this.direction) {
                case "N":
                    this.direction = "E";
                    break;
                case "E":
                    this.direction = "S";
                    break;
                case "S":
                    this.direction = "W";
                    break;  
                case "W":
                    this.direction = "N";
                    break;  
                case "W":
                    break;
            }
        };
        this.moveForward = function(){
            console.log("turnRight was called!");
            // save by value
            this.logs.push([this.position[0], this.position[1]]);
            // save by reference (not what we want)
            // this.logs.push(this.position);
        
            switch(this.direction) {
                case "N":
                    //this.position[1] = this.position[1] + 1;
                    this.position[1]++;
                    break;
                case "E":
                    this.position[0]++;
                    break;
                case "S":
                    this.position[1]--;
                    break;  
                case "W":
                    this.position[0]--;
                    break;
            }
            game.checkForCollision(this);
            this.checkBounds();
        };
        this.checkBounds = function(){
            if(
                this.position[0] < 0 || this.position[0] > 9 
                ||
                this.position[1] < 0 || this.position[1] > 9
            ) {
                alert("Out of bounds!")
                // this.position = this.logs[this.logs.length - 1];
                // this.splice(this.logs.length - 1, 1);
                /* quicker and prettier way of achieving the same: */
                this.position = this.logs.pop();
            }
        };
        this.validateCommandString = function(commands) {   
            for(var i = 0; i < commands.length; i++) { 
                // Check the documentation about indexOf      
                if("flr".indexOf(commands[i]) === -1 ) {
                    return false;
                }
            }  
            // If we were able to finish the loops, all commands must be valid.
            return true;
        };
        this.instructRover = function(commands) {
            if(this.validateCommandString(commands)) {
                for(var i = 0; i < commands.length; i++) {
                    switch(commands[i]) {
                        case "l":
                            this.turnLeft();
                            break;
                        case "r":
                            this.turnRight();
                            break;
                        case "f":
                            this.moveForward();
                            break;
                        /* alternative command validation */
                        // default: 
                        // alert(command[i] + " is not a command!");
                        // return;
                    }
                }
            } else {
               alert("Invalidate command string. The onlay valid commands are l, f, r, b")
            }
        };
}

var game = {
    obstacles :  [[1,1], [3,4]],
    rovers: [], // The rover objects are pushed to game on rover creation. Check the Rover constructor.
    checkForCollision: function(){
        var obstacles = this.obstacles;
        var rovers = this.rovers;
        for(var i =0; i < obstacles.length; i++) {
            for(var j = 0; j < rovers.length; j++) {
                if(
                    obstacles[i][0] === rovers[j].position[0] 
                    && 
                    obstacles[i][1] === rovers[j].position[1]) {
                        alert("BOEEM!");
                }
            }
        }
    }
}

var aRoverObject = new RoverConstructor(game);
var anotherRoverObject = new RoverConstructor(game);

anotherRoverObject.instructRover("lf");
aRoverObject.instructRover("rffflff");