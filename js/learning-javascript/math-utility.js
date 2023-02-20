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



/*function frames(){
     if(y<=-200){
         clearInterval(timerId)
     }else{
         y-=1;
         myAnimation.style.top=y+'px'
     }
    }
 
    //Slide animation
 
     if(y>=200||x>=200){
         clearInterval(timerId)
     }else{
         x+=1
         y+=1;
         myAnimation.style.left=x+'px'
         myAnimation.style.top=y+'px'
     }
    
 
   
    //Rotation
 
    if(degrees>=360){
     clearInterval(timerId)
    }else{
     degrees+=1
     myAnimation.style.transform='RotateY('+degrees+'deg)'
    }
    
 
 
    //rotate diagonally
    if(x>=200||y>=200){
     clearInterval(timerId)
    }else{
     degrees+=5 //controls the speed of rotation
     x+=1
     y+=1
     myAnimation.style.transform='RotateZ('+degrees+'deg)'
     myAnimation.style.top=y+'px'
     myAnimation.style.left=x+'px'
    }
 
  
    //Scale
    if(scaleX>=2||scaleY>=2){
     clearInterval(timerId)
    } else{
     scaleY+=0.01
     scaleX+=0.01
     myAnimation.style.transform='scale('+scaleX+','+scaleY+')'
    }
 
    
*/


//Checkers

const checker=document.getElementById('checker-piece')

const nextMove=document.querySelector('.gotothis')
const secondMove=document.querySelector('.gotothis2')
nextMove.addEventListener('click',move)
secondMove.addEventListener('click',move2)



function move(){
    let timerId=null
     x=0;
     y=0;

    timerId=setInterval(slide,2)

    function slide(){
        if(x>=125||y>=125){
            clearInterval(timerId);
        }else{
            x+=1;
            y+=1;
            checker.style.top=y+'px'
            checker.style.left=x+'px'
        }
    }
}
function move2(){
    let timerId=null
     x2=125;
     y2=125;

    timerId=setInterval(slide2,2)

    function slide2(){
        if(x2<=0||y>=250){
            clearInterval(timerId);
        }else{
            x2-=1;
           y2+=1;
           
            checker.style.left=x2+'px'
            checker.style.top=y2+'px'
        }
    }
}


//transform to object
let numbs=[1,2,3]
function transformToObjects(arr){
    return arr.map((num)=>{
        let obj={val:num}
        return obj
    })
}
console.log(transformToObjects([1,2,3]));


//API practice Create classes dynamically
/*async function memes(){
    let getMemes= await fetch('http://api.imgflip.com/get_memes',{
        method:'GET',
        headers:{Accept:'application/json'}
    })

    let datas= await getMemes.json();
    let memesArray=datas.data.memes
   
    console.log(memesArray[1]);

    let Arr10=[]
    for(i=0;i<=9;i++){
      Arr10.push(memesArray[i])
    }
    console.log(Arr10);
    
    Arr10.forEach((element)=>{
      let gridmemes=Createelement('img',AppendClass,'','allmemes')
    
        let url=element.url
        console.log(url);
        console.log(gridmemes);
       gridmemes.src=url
       
    })

    /*function showImage(url){
        let random=Math.floor(Math.random()*99)
        console.log(random);
         url=memesArray[random].url
         img.src=url
        }*/
/*}

memes()

let AppendClass=document.querySelector('.Appendto')

function Createelement(elementType,appendTo,textContents,classAdd){
  let element=document.createElement(elementType)
  element.textContent=textContents;
  element.classList.add(classAdd)
  appendTo.appendChild(element)
  return element
}*/
