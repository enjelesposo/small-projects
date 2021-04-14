'use strict';

const button = document.querySelector('.clock-button');
const hourDisplay = document.querySelector('.hour');
const minDisplay = document.querySelector('.min');
const background = document.querySelector('.time-wrapper');
const meridies = document.querySelector('.meridies');

function digitalClock(){
  
  currentTime();
  
  // gets the current time
  function currentTime(){
    var date = new Date(); // creates a Date object
    var hour = date.getHours();
    var min = date.getMinutes();
    hourDisplay.textContent = hour;
    minDisplay.textContent = updateTime(min);
    if(hour >= 12){
      meridies.textContent = 'p.m.';
    }
  }
  
  function updateTime(t) {
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }
  
  
  // push button -> color changes
  button.addEventListener('click', function(){

    if(button.classList.contains('down')){  // button is already pushed

        button.classList.remove('down');
        document.querySelectorAll('.time-wrapper h1').forEach( h => {h.style.color = "#56423E";});
        meridies.style.color = "#56423E";
        background.style.backgroundColor = 'white';

    } else{   // button is pushed first time
        sayDate();
        button.classList.add('down');
        document.querySelectorAll('.time-wrapper h1').forEach( h => {h.style.color = "white";});
        meridies.style.color = "white";
        background.style.backgroundColor = '#56423E';
    }
  })

  function sayDate(){
      var message = new SpeechSynthesisUtterance();
      message.pitch = 2;
      message.text = 'hello world!';
      window.speechSynthesis.speak(message);
  }

}

digitalClock();