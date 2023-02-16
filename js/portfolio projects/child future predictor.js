let userInput=document.getElementById('childBirthDateId')
let submitAgeBtn=document.getElementById('submitAgeId')
let displayDate=document.getElementById('displayDateId')
let kindergarten=document.getElementById('kindergartenId')
let highSchool=document.getElementById('highSchoolId')
let canDrink=document.getElementById('legal-drinking-ageId')
let college=document.getElementById('collegeId')
let forty=document.getElementById('fortyId')
let retirement=document.getElementById('retirementId')
let spinner=document.querySelector('.spinner1')
let ifBaby=document.getElementById('ifBaby')
let error=document.getElementById('emptytext')
let resultsWrapper=document.querySelector('.resultswrapper')

submitAgeBtn.addEventListener('click',Predict)


function Predict(){
    let convert=parseInt(userInput.value)
    
    //error handler
    if(isNaN(convert)){
        error.style.display='block'
        error.innerHTML='Please enter a Number'
        error.style.color='red'
        resultsWrapper.style.display='none'
        spinner.style.display='none'
       
       
       }else{
           resultsWrapper.style.display='block'
           error.style.display='none'
       }

    let prediction={
        DOB:convert,
       
        showPrediction(){
          
         displayDate.innerHTML=convert
         kindergarten.innerHTML=`${convert+4}:Starts Kindergarten`
         highSchool.innerHTML=`${convert+18}:Graduates Highschool`
         canDrink.innerHTML=`${convert+21}:Legal Drinking Age`
         college.innerHTML=`${convert+23}:Graduates College`
         forty.innerHTML=`${convert+40}:Turns 40`
         retirement.innerHTML=`${convert+65}:Retirement`
        
         ifBaby.style.display='block'
        }

    }

    //spinner
    spinner.style.display='block'
    
   
    let startt=setTimeout(()=>{prediction.showPrediction()
        spinner.style.display='none'
        
    },2000
       )

       console.log(typeof convert)
    console.log(prediction.DOB)
}




let cjeck='string'
console.log(isNaN(cjeck))