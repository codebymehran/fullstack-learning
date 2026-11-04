const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const toggleBtn = document.getElementById('formatToggle');

let year,month,date,day,hours,minutes,seconds,ampm;
let is24HourFormat = true;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
];
function updateTime(){
const   now  = new Date();
year = String(now.getFullYear());
month = months[now.getMonth()];
date = String(now.getDate());
day = days[now.getDay()];
const currentHour = now.getHours();
if(is24HourFormat){
  hours = String(now.getHours()).padStart(2,"0");
  ampm ="";
}else{
  ampm = currentHour>=12  ? "PM" : "AM";
  const hour12 = currentHour % 12 || 12;
    hours = String(hour12).padStart(2, "0");
}

 minutes = String(now.getMinutes()).padStart(2,"0");
 seconds = String(now.getSeconds()).padStart(2,"0");
}

function render(){
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  dateEl.textContent = `${day}, ${month} ${date}, ${year}`;
  ampmEl.textContent = ampm;
}
updateTime();
render();
setInterval(() => {
  updateTime();
  render();

}, 1000);

toggleBtn.addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;

  updateTime();
  render();

  toggleBtn.textContent = is24HourFormat
    ? "Switch to 12H"
    : "Switch to 24H";
});
