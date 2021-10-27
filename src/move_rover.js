const roverActions = require("../src/rover_actions");

/**
 * move rover main function
 * @param gridSize
 * @param currentPosition
 * @param path
 * @returns {string}
 */
function moveRover(gridSize,currentPosition,path){
    let gridSizeArray = gridSize.split(' ');
    let curPosArray = currentPosition.split(' ');
    let currentDirection = curPosArray[2];
    inputValidation(gridSizeArray,curPosArray);
    path.split('').forEach((char)=>{
        if(char==='R'){
            currentDirection = roverActions.updatedRightDirection(currentDirection);
            curPosArray[2] = currentDirection;
        }else if(char==='L'){
            currentDirection = roverActions.updatedLeftDirection(currentDirection);
            curPosArray[2] = currentDirection;
        }else if(char==='M'){
            if(currentDirection=== 'N' || currentDirection==='S'){
                curPosArray[1] = roverActions.updatedPositionY(currentDirection,curPosArray[1]);
                if(parseInt(gridSizeArray[1])<curPosArray[1]) throw new Error("Rover can not move passing grid edges");
            }else{
                curPosArray[0] = roverActions.updatedPositionX(currentDirection,curPosArray[0]);
                if(parseInt(gridSizeArray[0])<curPosArray[0]) throw new Error("Rover can not move passing grid edges");
            }
        }else throw new Error("Path should have only L,M,R");

    });
    return curPosArray[0]+' '+curPosArray[1]+' '+curPosArray[2];
}

/**
 * validate inputs
 * @param gridSizeArr
 * @param curPosArr
 */
function inputValidation(gridSizeArr,curPosArr){
    if(curPosArr.length!==3 || !['N','E','S','W'].includes(curPosArr[2]))
        throw new Error("Current position should include N,E,S,W as the facing direction");
    if(parseInt(gridSizeArr[0])<0 || parseInt(gridSizeArr[1])<0 || parseInt(curPosArr[0])<0 || parseInt(curPosArr[1])<0)
        throw new Error("Grid size and current position can not contain negative numbers");
    if(gridSizeArr.length!==2 || parseInt(gridSizeArr[0])< parseInt(curPosArr[0]) || parseInt(gridSizeArr[1])<parseInt(curPosArr[1]))
        throw new Error('Path exceeded grid dimensions');
}

module.exports = moveRover
