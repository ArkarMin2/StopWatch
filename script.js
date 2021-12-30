const time           = document.getElementsByClassName("time")      [0];//time
const mSecond        = document.getElementsByClassName("mSecond")   [0];//MilliSecond
const startButton    = document.getElementsByClassName("start")     [0];//start
const pauseButton    = document.getElementsByClassName("pause")     [0];//pause
const continueButton = document.getElementsByClassName("continue")  [0];//continue
const resetButton    = document.getElementsByClassName("reset")     [0];//reset

let second = 0, minute = 0, hour = 0;
let milliSecond = 0

let intervalId;
startButton.addEventListener("click",()=>{
    intervalId =setInterval(startTime,1)
    intervalId2 =setInterval(startTime,1)
    intervalId3 =setInterval(startTime,1)
    intervalId4 =setInterval(startTime,1)
    startButton.style.display ="none"
    pauseButton.style.display = "inline-block"
})

pauseButton.addEventListener("click",()=>{
    clearInterval(intervalId)
    clearInterval(intervalId2)
    clearInterval(intervalId3)
    clearInterval(intervalId4)
    continueButton.style.display ="inline-block"
    pauseButton.style.display = "none"
})

continueButton.addEventListener("click",()=>{
    clearInterval(intervalId)
    clearInterval(intervalId2)
    clearInterval(intervalId3)
    clearInterval(intervalId4)
    intervalId =setInterval(startTime,1)
    intervalId2 =setInterval(startTime,1)
    intervalId3 =setInterval(startTime,1)
    intervalId4 =setInterval(startTime,1)
    continueButton.style.display = "none"
    pauseButton.style.display = "inline-block"
})

resetButton.addEventListener("click",()=>{
    clearInterval(intervalId)
    clearInterval(intervalId2)
    clearInterval(intervalId3)
    clearInterval(intervalId4)
    time.textContent = "00" + ":" + "00" + ":" + "00";
    second = 0, minute = 0, hour = 0;
    mSecond.textContent = "000"
    milliSecond=0
    continueButton.style.display = "none"
    pauseButton.style.display = "none"
    startButton.style.display = "inline-block"
})

const startTime = () => { 
    milliSecond++ ;
    if(milliSecond===999){
        milliSecond = 0 ;
        second++
    }
    let milliSecText;
    if(milliSecond < 10){
        milliSecText = "00" + milliSecond.toString()
    }else if(milliSecond < 100){
        milliSecText = "0" + milliSecond.toString()
    }else{
        milliSecText = milliSecond
    }
    mSecond.textContent = milliSecText ;
    if(second === 60){
        second = 0 ;
        minute++ ;
        if(minute === 60){
            minute = 0;
            hour++ ;
        }
    }
    const secondText = second < 10 ? "0" + second.toString() :second ;
    const minuteText = minute < 10 ? "0" + minute.toString() :minute ;
    const hourText   = hour   < 10 ? "0" + hour  .toString() :hour   ;
    time.textContent = hourText +":"+ minuteText +":"+secondText ;
}