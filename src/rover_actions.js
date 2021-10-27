/**
 * Turn left
 * @param currentDirection
 * @returns {string}
 */
const updatedLeftDirection = function(currentDirection) {
    if(currentDirection==='N') return 'W';
    if(currentDirection==='W') return 'S';
    if(currentDirection==='S') return 'E';
    if(currentDirection==='E') return 'N';
};

/**
 * Turn right
 * @param currentDirection
 * @returns {string}
 */
const updatedRightDirection = function (currentDirection){
    if(currentDirection==='N') return 'E';
    if(currentDirection==='W') return 'N';
    if(currentDirection==='S') return 'W';
    if(currentDirection==='E') return 'S';
};

/**
 * Update direction in Y axis
 * @param currentDirection
 * @param currentPosition
 * @returns {number}
 */
const updatedPositionY = function (currentDirection,currentPosition){
    if(currentDirection==='N') return parseInt(currentPosition)+1;
    if(currentDirection==='S') return parseInt(currentPosition)-1;
};

/**
 * Update direction in X axis
 * @param currentDirection
 * @param currentPosition
 * @returns {number}
 */
const updatedPositionX = function (currentDirection,currentPosition){
    if(currentDirection==='E') return parseInt(currentPosition)+1;
    if(currentDirection==='W') return parseInt(currentPosition)-1;
};

module.exports = {
    updatedLeftDirection,
    updatedRightDirection,
    updatedPositionX,
    updatedPositionY
};
