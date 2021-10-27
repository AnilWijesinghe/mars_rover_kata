# Read Me

>Implementation of 'Mars Rover Kata' assignment.

### Table of Contents
You're sections headers will be used to reference location of destination.

- [Technologies](#Technologies)
- [Key features of solution](#Key-features-of-solution)
- [Assumptions](#Assumptions)
- [Approaches](#Approaches)
- [Future thoughts](#Future-thoughts)

## Technologies
- JavaScript
- Jest unit test framework

## Key features of solution
- Move rover around the surface of mars.

## Assumptions
- Plateau is a rectangular grid.
- There is only one rover.
- A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North,
South, West, East.
- Rover's path defined by using L,M,R to represent
    - L Spins the Rover 90 degrees Left
    - R Spins the Rover 90 degrees Right
    - M Moves the Rover forward by one grid point, maintaining the same
direction
- Single M in a path for a one move 
- Pass arguments as grid size,current position,path.

## Approaches
- Modelling the problem first to plan out the ideas.
- Apply Test-Driven Development (TDD) to test-drive solution.
- Seperate classess,funtions have been maintained.
- Exception handling.


## Future thoughts
- There is a separate class written to define the rover's movements. Therefore, new movements can be easily added when extending the solution in future.
- The function written to handle the exceptions can be modified for handling the exceptions with future extentions of the solution.

