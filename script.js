// http://api.weatherapi.com/v1/current.json?key=40cee272c08f4641a8d45210252001&q=Bihar&aqi=no

const tempratureField = document.querySelector(".temp");
const locationField = document.querySelector(".location p");
const dateandTImeField = document.querySelector(".location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector(".footer")

form.addEventListener('submit' , searchForLocation)

let target= 'Mumbai'

const fetchResult = async (targetlocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=40cee272c08f4641a8d45210252001&q=${targetlocation}&aqi=no`


    const res = await fetch(url)
    const data =await res.json()
    console.log(data)
    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    updateDetails(temp , locationName , time , condition)

}



function updateDetails(temp ,  locationName , time , condition){

        let splitDate = time.split(" ")[0];
        let splitTime = time.split(" ")[1];


        let currentDay = getDayName(new Date(splitDate).getDay());

         tempratureField.innerText = temp;
         locationField.innerText = locationName;
         dateandTImeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
         weatherField.innerText = condition;

}

// function updateDetails(temp, locationName, time, condition) {
//     let splitDate = time.split(" ")[0]; // Extract the date (YYYY-MM-DD)
//     let splitTime = time.split(" ")[1]; // Extract the time (HH:MM)
    
//     // Use the date string to create a Date object and get the day of the week
//     let currentDay = getDayName(new Date(splitDate).getDay());
    
//     tempratureField.innerText = `${temp}°C`;
//     locationField.innerText = locationName;
//     dateandTImeField.innerText = `${splitDate}  ${currentDay}  ${splitTime}`;
//     weatherField.innerText = condition;
// }



function searchForLocation(e){
    
    e.preventDefault()
    target=searchField.value
    
    fetchResult(target)
    
}

fetchResult(target)

function getDayName(number) {
    switch (number) {
                case 0: 
                    return "Sunday";
                case 1:
                    return "Monday";
                case 2:
                    return "Tuesday";
                case 3:
                    return "Wednesday";
                case 4:
                    return "Thrusday";
                case 5:
                    return "Friday";
                case 6:
                    return "Saturday";
    }
}


 