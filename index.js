// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if (block < 42){
        return (42-block)
    }
    else if (block > 42){
        return (block-42)
    }
}
function distanceFromHqInFeet(block){
    if (block < 42){
        return ((42-block)*264)
    }
    else if(block > 42){
        return ((block-42)*264)
    }
}
function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return ((start-destination)*264)
    }
    else if(start < destination){
        return ((destination-start)*264)
    }
}
 
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    const diff = distance - 400; 
  
    if (distance < 400) {
      return 0;
    }
    else if (distance > 400 && distance < 2000) {
      return diff * 0.02; 
    }
    else if (distance > 2000 && distance < 2500) {
      return 25; 
    }
    else {
      return "cannot travel that far"; 
    }
}