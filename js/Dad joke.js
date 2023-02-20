let displayDadJoke=document.getElementById('dadjokedisplayID')
let generateJokeBtn=document.getElementById('gendadjokeID')
let clipboard=document.querySelector('.fa-clipboard')
let img=document.querySelector('.theimage')

generateJokeBtn.addEventListener('click',GetJoke)
clipboard.addEventListener('click',Copy)

async function GetJoke(){
  let response=await fetch('https://icanhazdadjoke.com/',{
    method:'GET',
    headers:{
        Accept:'application/json'
    }
  });
  let data=await response.json()
  console.log(data.joke)
  displayJoke(data.joke)
}

async function Copy(){
  await navigator.clipboard.writeText(displayDadJoke.innerHTML)
  alert('Copied the text:'+displayDadJoke.innerHTML)
  console.log(displayDadJoke.innerHTML);
}



function displayJoke(joke){
  displayDadJoke.innerHTML=joke
}



