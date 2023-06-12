// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    let blocks

    if (street > 42) {
        blocks = street - 42
    }
    else {
        blocks = 42 - street
    }
    return blocks
}

function distanceFromHqInFeet(distance) {
    let blocks
    let feet
    blocks = distanceFromHqInBlocks(distance)
    feet = blocks * 264
    return feet
}


function distanceTravelledInFeet(start, destination) {
    let feetTraveled
    feetTraveled = (destination - start) * 264

    if (start < destination) {
        feetTraveled = (destination - start) * 264
    }
    else {
        feetTraveled = (start - destination) * 264
    }
    return feetTraveled
} 



function calculatesFarePrice(start, destination) {
    
    let feet = Math.abs(destination - start) * 264

    let fare = 0
    
    switch(true) {
        case feet < 400:
            
          return fare = 0

        case feet > 400 && feet < 2000:
          return fare = (feet - 400) * 0.02
          
        case feet > 2000 && feet < 2500:
            return fare = 25

        default:
            return 'cannot travel that far'
      }
}

