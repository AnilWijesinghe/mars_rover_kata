const roverActions = require('../src/rover_actions');

beforeEach(()=>{
    turnLeft = {
        currentDirection:'N'
    };
    turnRight = {
        currentDirection:'N'
    };
    moveYAxisN = {
        currentDirection: 'N',
        currentYPosition: '2'
    };
    moveYAxisS = {
        currentDirection: 'S',
        currentYPosition: '2'
    };
    moveXAxisE = {
        currentDirection: 'E',
        currentXPosition: '2'
    };
    moveXAxisW = {
        currentDirection: 'W',
        currentXPosition: '2'
    };
});

afterEach(() => {
    jest.clearAllMocks();
});

test('test turn left', () => {
    // Arrange
    const currentDirection = turnLeft.currentDirection;
    // Act
    const UpdatedDirection = roverActions.updatedLeftDirection(currentDirection);
    // Assert
    expect(UpdatedDirection).toBe('W');
});

test('test turn right', () => {
    // Arrange
    const currentDirection = turnRight.currentDirection;
    // Act
    const UpdatedDirection = roverActions.updatedRightDirection(currentDirection);
    // Assert
    expect(UpdatedDirection).toBe('E');
});

test('Move Y axis towards N', () => {
    // Arrange
    const currentDirection = moveYAxisN.currentDirection;
    const currentPosition  = moveYAxisN.currentYPosition;
    // Act
    const UpdatedPosition = roverActions.updatedPositionY(currentDirection,currentPosition);
    // Assert
    expect(UpdatedPosition).toBe(3);
});

test('Move Y axis towards S', () => {
    // Arrange
    const currentDirection = moveYAxisS.currentDirection;
    const currentPosition  = moveYAxisS.currentYPosition;
    // Act
    const UpdatedPosition = roverActions.updatedPositionY(currentDirection,currentPosition);
    // Assert
    expect(UpdatedPosition).toBe(1);
});

test('Move X axis towards E', () => {
    // Arrange
    const currentDirection = moveXAxisE.currentDirection;
    const currentPosition  = moveXAxisE.currentXPosition;
    // Act
    const UpdatedPosition = roverActions.updatedPositionX(currentDirection,currentPosition);
    // Assert
    expect(UpdatedPosition).toBe(3);
});

test('Move X axis towards W', () => {
    // Arrange
    const currentDirection = moveXAxisW.currentDirection;
    const currentPosition  = moveXAxisW.currentXPosition;
    // Act
    const UpdatedPosition = roverActions.updatedPositionX(currentDirection,currentPosition);
    // Assert
    expect(UpdatedPosition).toBe(1);
});




