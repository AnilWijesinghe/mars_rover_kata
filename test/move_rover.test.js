const moveRover = require('../src/move_rover');
const roverActions = require('../src/rover_actions');
jest.mock('../src/rover_actions');




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
    expect(finalPosition).toBe('1 3 N');
});
