


const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");

button.addEventListener("click",function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+`&appid=${api}`)
        .then(response => response.json())
        .then(data => {
            
            const nameValue = data["name"]
            const tempValue = data['main']['temp'];
            const descValue = data["weather"][0]['description'];
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
    
        
     .catch(err => alert("wrong city"))
    
    //  let kelvin = .main.temp;
    // let degC = Math.floor(kelvin - 273.15);
    // console.log(degC);
    //  let F = degC * 1.8 + 32;
    //  let degF = Math.floor(degC * 1.8 + 32);
    //  console.log(degF)


            
         })

   
        
        
              
               

                
        