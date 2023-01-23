const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } /*else {
            entry.target.classList.remove('show')
        }*/
    })
})


const hiddenElements=document.querySelectorAll('.hidden')

hiddenElements.forEach((el)=>{observer.observe(el)})


let myTitle=document.querySelector('.welcome')




/*setTimeout(()=>{
    let myTitle=document.querySelector('.welcome')
    myTitle.style.animation='none'
    myTitle.style.borderColor='transparent'
    myTitle.innerHTML='welcome'
},3000)*/