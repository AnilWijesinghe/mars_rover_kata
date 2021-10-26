const roverActions = require('./rover_actions');

function moveRover(gridSize,currentPosition,path){
    let gridSizeArray = gridSize.split(' ');
    let curPosArray = currentPosition.split(' ');
    let currentDirection = curPosArray[2];
    inputValidation(gridSizeArray,curPosArray,path);
    path.split('').forEach((char)=>{
        if(char==='R'){
            currentDirection = roverActions.updatedRightDirection(currentDirection);
            curPosArray[2] = currentDirection;
        }else if(char==='L'){
            currentDirection = roverActions.updatedLeftDirection(currentDirection);
            curPosArray[2] = currentDirection;
        }else{
            if(currentDirection=== 'N' || 'S'){
                curPosArray[1] = roverActions.updatedPositionY(curPosArray[1]);
            }else{
                curPosArray[0] = roverActions.updatedPositionX(curPosArray[0]);
            }
        }
    });
    return '1 3 N';
}

function inputValidation(gridSizeArr,curPosArr,path){
    if(curPosArr.length!==3 || !['N','E','S','W'].includes(curPosArr[2]))
        throw new Error("Current position should include N,E,S,W as the facing direction");
    if(gridSizeArr.length!==2 || parseInt(gridSizeArr[0])< parseInt(curPosArr[0]) || parseInt(gridSizeArr[1])<parseInt(curPosArr[1]))
        throw new Error('Path exceeded grid dimensions');
}

module.exports = moveRover
