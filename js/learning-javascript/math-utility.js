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


    //Capitalize first letter


/*    let namies=['red','brown','green']


for(names of namies){
    let names1=names.charAt(0).toUpperCase()+ names.slice(1)
    console.log(names1)
    
}*/


//create grid
/*for(let i=1;i<=3;i++){
    
    for(let j=1; j<=3;j++){
        let created=document.createElement('div');
    created.style.backgroundColor='lightgreen'
    created.style.width='300px'
    created.style.height='300px'
    created.style.border='1px solid'

    
    outerr.appendChild(created)
    }
    
    
}*/