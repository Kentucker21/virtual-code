let decreaseBtn=document.getElementById('dec-btn');
let resetBtn=document.getElementById('Reset-btn');
let increaseBtn=document.getElementById('inc-btn');
let iconsBtn=document.getElementById('icons-switch');
let counterDisplay=document.getElementById('counter-display')
let wordsBtn=document.getElementById('words-switch')
function CounterApp(){
  let count=0;

  decreaseBtn.onclick=()=>{
    counterDisplay.innerHTML=`${count-=1}`
  }
 
  resetBtn.onclick=()=>{
    counterDisplay.innerHTML=`${count=0}`;
    console.log('click')
  }
    increaseBtn.onclick=()=>{
        counterDisplay.innerHTML=`${count+=1}`
    }


    iconsBtn.onclick=()=>{
     increaseBtn.value='+'
     decreaseBtn.value='-'
     resetBtn.innerHTML=`<i class="fas fa-rotate-left spinner1"></i>`
     iconsBtn.style.display='none';
     wordsBtn.style.display='flex';
        
    }

    wordsBtn.onclick=()=>{
        increaseBtn.value='increase'
        decreaseBtn.value='decrease'
        resetBtn.innerHTML='reset'
        wordsBtn.style.display='none';
        iconsBtn.style.display='block';
    }
  
}
CounterApp()

