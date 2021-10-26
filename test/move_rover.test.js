const moveRover = require('../src/move_rover');
const roverActions = require('../src/rover_actions');
const updatedLeftDirection = jest.spyOn(roverActions, 'updatedLeftDirection');
const updatedPositionY = jest.spyOn(roverActions, 'updatedPositionY');
const updatedPositionX = jest.spyOn(roverActions, 'updatedPositionX');

beforeEach(()=>{
    roverWrongNoDir = {
        gridSize: '5 5',
        currentPosition: '1 2',
        movePath: 'LMLMLMLMM'
    };
    roverWrongExceedGridSize = {
        gridSize: '5 5',
        currentPosition: '1 6 N',
        movePath: 'LMKLMLMLMM'
    };
    roverSuccessInput = {
        gridSize: '5 5',
        currentPosition: '1 2 N',
        movePath: 'LMLMLMLMM'
    };
});

afterEach(() => {
    jest.clearAllMocks();
});

test('test Un-successful no direction in current position', () => {
    // Arrange
    const gridSize = roverWrongNoDir.gridSize;
    const currentPosition = roverWrongNoDir.currentPosition;
    const path = roverWrongNoDir.movePath;

    // Act and Assert
    expect(()=>{
        moveRover(gridSize,currentPosition,path);
    }).toThrow('Current position should include N,E,S,W as the facing direction');
});

test('test Un-successful when grid size exceed path', () => {
    // Arrange
    const gridSize = roverWrongExceedGridSize.gridSize;
    const currentPosition = roverWrongExceedGridSize.currentPosition;
    const path = roverWrongExceedGridSize.movePath;

    // Act and Assert
    expect(()=>{
        moveRover(gridSize,currentPosition,path);
    }).toThrow('Path exceeded grid dimensions');
});

test('test successful', () => {
    // Arrange
    const gridSize = roverSuccessInput.gridSize;
    const currentPosition = roverSuccessInput.currentPosition;
    const path = roverSuccessInput.movePath;

    // Act
    const finalPosition = moveRover(gridSize,currentPosition,path);

    // Assert
    expect(updatedLeftDirection)
        .toHaveBeenCalledWith(currentPosition[4]);
    expect(updatedLeftDirection)
        .toHaveBeenCalledTimes(4);
    /*expect(updatedPositionX)
        .toHaveBeenCalledWith(currentPosition[4],currentPosition[0]);
    expect(updatedPositionX)
        .toHaveBeenCalledTimes(2);*/
    /*expect(updatedPositionY)
        .toHaveBeenCalledWith(currentPosition[4],currentPosition[2]);
    expect(updatedPositionY)
        .toHaveBeenCalledTimes(3);*/
    expect(finalPosition).toBe('1 3 N');
});
