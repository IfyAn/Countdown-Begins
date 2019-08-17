const countdown=document.querySelector('.countdown');

//Set lauch date
const launchDate=new Date('July 30, 2019 01:00:00').getTime();

//Update every Sec.
const intvl= setInterval(()=>{

//Get Today Date and Time
const now=new Date().getTime();

//Distance From Now Till launch date
const distance=launchDate - now;

//Time Calculation
const days=Math.floor(distance/ (1000 * 60 * 60 * 24));
const hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
const mins=Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
const seconds=Math.floor((distance % (1000 * 60 )) / (1000));

//Display Result
countdown.innerHTML= `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
`;

//If launch date pass
if(distance === 0 ){
//Stop countdown
 clearInterval(intvl);
 //Style & output text
 countdown.style.color='#17a2b8';

 countdown.innerHTML='Launched';
 }
}, 1000)

//Run countdown
