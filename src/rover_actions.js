const updatedLeftDirection = function turnLeft(currentDirection){
    if(currentDirection==='N') return 'W';
    if(currentDirection==='W') return 'S';
    if(currentDirection==='S') return 'E';
    if(currentDirection==='E') return 'N';
}

const updatedRightDirection =function turnRight(currentDirection){
    if(currentDirection==='N') return 'E';
    if(currentDirection==='W') return 'N';
    if(currentDirection==='S') return 'W';
    if(currentDirection==='E') return 'S';
}

const updatedPositionY = function moveYAxis(currentDirection,currentPosition){
    if(currentDirection==='N') return parseInt(currentPosition)+1;
    if(currentDirection==='S') return parseInt(currentPosition)-1;
}

const updatedPositionX =function moveXAxis(currentDirection,currentPosition){
    if(currentDirection==='E') return parseInt(currentPosition)+1;
    if(currentDirection==='W') return parseInt(currentPosition)-1;
}

module.exports = {
    updatedLeftDirection,
    updatedRightDirection,
    updatedPositionX,
    updatedPositionY
};
