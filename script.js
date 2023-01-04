const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const dateSelected = document.querySelector('input[type="datetime-local"]');
const submitted = document.querySelector('#sub')
const resetBtn = document.querySelector('#reset-btn')
let stopwatch;

submitted.addEventListener('click', (e) => {
    e.preventDefault();
    
    stopwatch = setInterval(() => {
    const dateNow = new Date();
    const dateToCount = new Date(dateSelected.value);
    let countSeconds = dateToCount.getTime() - dateNow.getTime();
    let dayText = Math.floor(countSeconds / (1000 * 60 * 60 * 24));
    let hourText = Math.floor((countSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuteText = Math.floor((countSeconds % (1000 * 60 * 60)) / (1000 * 60));
    let secondText = Math.floor((countSeconds % (1000 * 60)) / 1000);
        
        if(dayText < 10){
            days.textContent = `0${dayText}:` 
        }else{
            days.textContent = `${dayText}:`
        }
        if(hourText < 10){
            hours.textContent = `0${hourText}:`
        }else{
            hours.textContent = `${hourText}:`
        }
        if(minuteText < 10){
            minutes.textContent = `0${minuteText}:`
        }else{
            minutes.textContent = `${minuteText}:`
        }
        if(secondText < 10){
            seconds.textContent = `0${secondText}`
        }else{
              seconds.textContent = `${secondText}`
        }

        if (countSeconds < 0) {
            clearInterval(stopwatch)};

    },1000)
        
    })

    resetBtn.addEventListener('click', () => {
        days.textContent = `00:`;
        hours.textContent = `00:`;
        minutes.textContent = `00:`;
        seconds.textContent = `00`;
        clearInterval(stopwatch);
        
    })

    console.log(resetBtn.value)