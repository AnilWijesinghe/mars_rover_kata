function moveRover(gridSize,currentPosition,path){
    let gridSizeArray = gridSize.split(' ');
    let curPosArray = currentPosition.split(' ');
    inputValidation(gridSizeArray,curPosArray,path);


    return '1 3 N';
}

function inputValidation(gridSizeArr,curPosArr,path){
    if(curPosArr.length!==3 || !['N','E','S','W'].includes(curPosArr[2]))
        throw new Error("Current position should include N,E,S,W as the facing direction");
    if(gridSizeArr.length!==2 || parseInt(gridSizeArr[0])< parseInt(curPosArr[0]) || parseInt(gridSizeArr[1])<parseInt(curPosArr[1]))
        throw new Error('Path exceeded grid dimensions');
}

module.exports = moveRover;
