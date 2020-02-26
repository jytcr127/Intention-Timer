
let category1 = document.querySelectorAll('.category')[0];
console.log(category1);

let category2 = document.querySelectorAll('.category')[1];
console.log(category2);

let category3 = document.querySelectorAll('.category')[2];
console.log(category3);

let StackOfCards = [];

let numberOfCards = 0;


let categoryHeader;

category1.addEventListener('click', function() {
	button.innerText = "Submit";
	category1.classList.toggle('category');
	category1.classList.toggle('skyblue');

	if(category1.classList.value === 'skyblue') {
		category2.style.pointerEvents = 'none';
		category3.style.pointerEvents = 'none';
		category_error.innerText = "";
		categoryHeader = category1.textContent;
	}  
	if (category1.classList.value !== 'skyblue') {
		category2.style.pointerEvents = 'auto';
		category3.style.pointerEvents = 'auto';
	}
})

category2.addEventListener('click', function() {
	button.innerText = "Submit";
	category2.classList.toggle('category');
	category2.classList.toggle('skyblue');

	if(category2.classList.value === 'skyblue') {
		category1.style.pointerEvents = 'none';
		category3.style.pointerEvents = 'none';
		category_error.innerText = "";
		categoryHeader = category2.textContent;
	}  
	if (category2.classList.value !== 'skyblue') {
		category1.style.pointerEvents = 'auto';
		category3.style.pointerEvents = 'auto';
	}
})

category3.addEventListener('click', function() {
	button.innerText = "Submit";
	category3.classList.toggle('category');
	category3.classList.toggle('skyblue');

	if(category3.classList.value === 'skyblue') {
		category1.style.pointerEvents = 'none';
		category2.style.pointerEvents = 'none';
		category_error.innerText = "";
		categoryHeader = category3.textContent;
	}  
	if (category3.classList.value !== 'skyblue') {
		category1.style.pointerEvents = 'auto';
		category2.style.pointerEvents = 'auto';
	}
})

let task = document.getElementById('accomplish')
let category_error = document.getElementById('category-error');


task.addEventListener('keypress', function(e) {
	button.innerText = "Submit";
	task_error.innerText = "";
	if(category1.classList.value !== 'skyblue' && category3.classList.value !== 'skyblue' && category2.classList.value !== 'skyblue') {
		e.preventDefault();
		category_error.innerText = "Please choose a category";
	}
	if(category1.classList.value === 'skyblue' || category3.classList.value === 'skyblue' || category2.classList.value === 'skyblue') {
		task_error.innerText = "";
	}
})

let minute = document.getElementById('minute');
let second = document.getElementById('second');
let task_error = document.getElementById('task-error');


minute.addEventListener('keypress', function(e) {
	button.innerText = "Submit";
	minute_error.innerText = "";
	if(task.value === "") {
		e.preventDefault();
		task_error.innerText = "Please enter a task";
	}
})

let minute_error = document.getElementById('minute-error');

second.addEventListener('keypress', function(e) {
	button.innerText = "Submit";
	if(minute.value === "") {
		e.preventDefault();
		minute_error.innerText = "Please enter minutes"
	}
})


	
let button = document.getElementById('submit-button');
let newHeader = document.querySelector('.header1');
let act = document.querySelector('h2');
let timer1 = document.querySelector('#else');
let removeHeaders = document.querySelectorAll('.activity-tracker');

button.addEventListener('click', function(e) {

		if(category1.classList.value !== 'skyblue' && category3.classList.value !== 'skyblue' && category2.classList.value !== 'skyblue') {
		e.preventDefault();
		button.innerText = "Please choose a category";
		newHeader.preventDefault();
	}
		if(task.value === "") {
		e.preventDefault();
		button.innerText = "Please enter a task";
		newHeader.preventDefault();
	}
		if(minute.value === "") {
		e.preventDefault();
		button.innerText = "Please enter minutes";
		newHeader.preventDefault();
	}
		if(second.value === '') {
		e.preventDefault();
		button.innerText = 'Please enter seconds';
		newHeader.preventDefault();
	}

removeHeaders.forEach(element => {
  element.remove();
})
let accomplishment = document.querySelector('#accomplish');
let ruff = document.querySelector('#ruff');
let time1 = document.querySelector('#time1');
let time2 = document.querySelector('#time2');
let submit = document.querySelector('#submit');
let rightSection = document.querySelector('#tracker'); 
card = document.createElement('article');
rightSection.appendChild(card);
card.innerHTML = `<article id = 'articleCard'> 
<p id = 'cardCategory'>Category: ${categoryHeader}</p>
<p id = 'cardTask'>Task: ${task.value}</p>
<p id = 'cardTime'>Time: ${minute.value} MINUTES ${second.value} SECONDS</p>
<div class="setters">
  <div class="minutes-set">
  </div>
  <div class="seconds-set">
  </div>
</div>

<div id = 'final'>
  <span class="display-remain-time"></span>
  <button class="play" id="pause"></button>
<div class="circle">
  <svg width="243" viewBox="0 0 220 220">
     <g transform="translate(110,110)">
        <circle r="100" class="e-c-base"/>
        <g transform="rotate(-90)">
           <circle r="100" class="e-c-progress"/>
           <g id="e-pointer">
              <circle cx="100" cy="0" r="8" class="e-c-pointer"/>
           </g>
        </g>
     </g>
  </svg>
</div>
  </div>
</article>` 
card.style.backgroundColor = 'red'

let timer2 = document.querySelector('#content');

/*timer2.innerHTML = `  <span class="display-remain-time"></span>`*/
let accomplish = document.querySelector('#accomplish');


//circle start
let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
  var offset = - length - length * value / (timePercent);
  progressBar.style.strokeDashoffset = offset; 
  pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`; 
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time')
const pauseBtn = document.getElementById('pause');
const setterBtns = document.querySelectorAll('button[data-setter]');
let minuteValue = minute.value;
let secondValue = second.value;

let intervalTimer;
let timeLeft;
let wholeTime = (minuteValue * 60) + (secondValue % 60); // manage this to set the whole time 
let isPaused = false;
let isStarted = false;


update(wholeTime,wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);

function changeWholeTime(seconds){
  if ((wholeTime + seconds) > 0){
    wholeTime += seconds;
    update(wholeTime,wholeTime);
  }
}
// update right side of page
function timer (seconds){ //counts time, takes seconds
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);

  let final = document.querySelector('#final');
  intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft > 0) {
  	button.disabled = true;
  	}
    if(timeLeft === 0){
      final.remove();
      button.disabled = false;
      category2.style.pointerEvents = 'auto';
      category1.style.pointerEvents = 'auto';
      category3.style.pointerEvents = 'auto';
      category1.className = 'category';
      category2.className = 'category';
      category3.className = 'category'
      clearInterval(intervalTimer);
      isStarted = true;
      pauseBtn.disabled = true;
      card.style.backgroundColor = 'green';
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}
function pauseTimer(event){
  if(isStarted === false){
    timer(wholeTime);
    isStarted = true;
    this.classList.remove('play');
    this.classList.add('pause');
    setterBtns.forEach(function(btn){
      btn.disabled = true;
      btn.style.opacity = 0.5;
    });

  }else if(isPaused){
    this.classList.remove('play');
    this.classList.add('pause');
    timer(timeLeft);
    isPaused = isPaused ? false : true
  }else{
    this.classList.remove('pause');
    this.classList.add('play');
    clearInterval(intervalTimer);
    isPaused = isPaused ? false : true ;
  }
}

function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

pauseBtn.addEventListener('click',pauseTimer);
});





