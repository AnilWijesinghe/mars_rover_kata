const moveRover = require('../src/move_rover');
const roverActions = require('../src/rover_actions');
const updatedLeftDirection = jest.spyOn(roverActions, 'updatedLeftDirection');
const updatedPositionY = jest.spyOn(roverActions, 'updatedPositionY');
const updatedPositionX = jest.spyOn(roverActions, 'updatedPositionX');

let roverWrongNoDir;
let roverNegativeNum;
let roverWrongExceedGridSize;
let roverPathUndefChar;
let roverPassGridEdges;
let roverSuccessInput;


beforeEach(()=>{
    roverWrongNoDir = {
        gridSize: '5 5',
        currentPosition: '1 2 I',
        movePath: 'LMLMLMLMM'
    };
    roverNegativeNum = {
        gridSize: '-5 5',
        currentPosition: '1 2 N',
        movePath: 'LMLMLMLMM'
    };
    roverWrongExceedGridSize = {
        gridSize: '5 5',
        currentPosition: '1 6 N',
        movePath: 'LMKLMLMLMM'
    };
    roverPathUndefChar = {
        gridSize: '5 5',
        currentPosition: '1 2 N',
        movePath: 'LMLMLMLMY'
    };
    roverPassGridEdges = {
        gridSize: '5 5',
        currentPosition: '1 2 N',
        movePath: 'LMLMLMLMMMMM'
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

test('test Un-successful when passing negative values', () => {
    // Arrange
    const gridSize = roverNegativeNum.gridSize;
    const currentPosition = roverNegativeNum.currentPosition;
    const path = roverNegativeNum.movePath;

    // Act and Assert
    expect(()=>{
        moveRover(gridSize,currentPosition,path);
    }).toThrow('Grid size and current position can not contain negative numbers');
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

test('test unsuccessful rover path having undefined characters', () => {
    // Arrange
    const gridSize = roverPathUndefChar.gridSize;
    const currentPosition = roverPathUndefChar.currentPosition;
    const path = roverPathUndefChar.movePath;

    // Act and Assert
    expect(()=>{
        moveRover(gridSize,currentPosition,path);
    }).toThrow('Path should have only L,M,R');
});

test('test for move rover passing grid edges', () => {
    // Arrange
    const gridSize = roverPassGridEdges.gridSize;
    const currentPosition = roverPassGridEdges.currentPosition;
    const path = roverPassGridEdges.movePath;

    // Act and Assert
    expect(()=>{
        moveRover(gridSize,currentPosition,path);
    }).toThrow('Rover can not move passing grid edges');
});

test('rove move successfully', () => {
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
    expect(updatedPositionX)
        .toHaveBeenCalledWith('W','1');
    expect(updatedPositionX)
        .toHaveBeenCalledTimes(2);
    expect(updatedPositionY)
        .toHaveBeenCalledWith('S','2');
    expect(updatedPositionY)
        .toHaveBeenCalledTimes(3);
    expect(finalPosition).toBe('1 3 N');
});
