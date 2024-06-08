const form= document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector("#height").value)
    const weight= parseInt(document.querySelector("#weight").value)
    const result= document.querySelector("#result")
    const weightGuide= document.querySelector("#weight-guide");

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML= `Plese give valid Height`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML= `Plese give valid weight`;
    }
    else{
        const bmi=  (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML= `${bmi}`
        if(bmi<=18.6){
            weightGuide.innerHTML= "<span>Under weight</span>"
        }else if(bmi>18.6 && bmi<=24.9){
            weightGuide.innerHTML= "<span>Normal Range</span>"
        }else{
            weightGuide.innerHTML= "<span>Over weight</span>"
        }
    }
    
});


