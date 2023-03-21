// Code your solution in this file!
function distanceFromHqInBlocks (someValue){
    if (someValue<= 34) 
        return 8
    else if (someValue>= 50 ) 
        return 8 
    else (someValue== 43) 
        return 1

}

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet (start, destination) {
    //1 block = 264 ft
    return Math.abs((start - destination) * 264)
}



function calculatesFarePrice(start, destination) {
  let fare1 = distanceTravelledInFeet(start, destination) 
  if (distanceTravelledInFeet(start, destination) <400)
        return 0
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000)
         return (fare1 - 400) * .02
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500)
        return 25
    else (distanceTravelledInFeet(start, destination))
        return "cannot travel that far"
}
