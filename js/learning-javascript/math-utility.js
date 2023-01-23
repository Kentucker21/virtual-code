export const PI=3.14159;

 export function CircleArea(radius){
    var area=PI*Math.pow(radius,2);
    return area
}

 export function circleCircumference(radius){
    var circumference=2*PI*radius;
    return radius
}


 /*function shuffle(array){
    let currentIndex=array.length
    
    while(currentIndex !=0){
      let randomIndex=Math.floor(Math.random()*array.length)
      currentIndex=currentIndex-1;
    
      let temp=array[currentIndex];
      array[currentIndex]=array[randomIndex];
      array[randomIndex]=temp;
    }
    
    return array
    
    }*/