
/*document.querySelectorAll('.hmm').forEach(h => {
	h.addEventListener('click', function(e) {
		h.classList.toggle('hmm');
		h.classList.toggle('purple');
		console.log(h.classList);

	})
})*/


/*document.querySelectorAll('.hmm').forEach(h => {
	h.addEventListener('click', function(e) {
		if(h.classList.value === 'purple') {
			console.log('yes');
			console.log(h[0]);
		}
		h.style.pointerEvents = 'none';

	})
})*/


let dog = document.querySelectorAll('.hmm')[0];
console.log(dog);

let cat = document.querySelectorAll('.hmm')[1];
console.log(cat);

let fox = document.querySelectorAll('.hmm')[2];
console.log(fox);


/*document.querySelectorAll('.hmm').forEach(h => {
	h.addEventListener('click', function(e) {
		h.classList.toggle('hmm');
		h.classList.toggle('purple');

		if(dog.classList.value === 'purple') {
			cat.style.pointerEvents = 'none';
			fox.style.pointerEvents = 'none';
			dog.style.pointerEvents = 'auto';
		} 
		if (cat.classList.value === 'purple') {
			fox.style.pointerEvents = 'none';
			dog.style.pointerEvents = 'none';
		} 
		if(fox.classList.value === 'purple') {
			dog.style.pointerEvents = 'none';
			cat.style.pointerEvents = 'none';
		}
		h.addEventListener('click', function(e) {
			h.style.pointerEvents = 'unset';
		})
	})
})*/

dog.addEventListener('click', function() {
	dog.classList.toggle('hmm');
	dog.classList.toggle('purple');

	if(dog.classList.value === 'purple') {
		cat.style.pointerEvents = 'none';
		fox.style.pointerEvents = 'none';
	}  
	if (dog.classList.value !== 'purple') {
		cat.style.pointerEvents = 'auto';
		fox.style.pointerEvents = 'auto';
	}
})

cat.addEventListener('click', function() {
	cat.classList.toggle('hmm');
	cat.classList.toggle('purple');

	if(cat.classList.value === 'purple') {
		dog.style.pointerEvents = 'none';
		fox.style.pointerEvents = 'none';
	}  
	if (cat.classList.value !== 'purple') {
		dog.style.pointerEvents = 'auto';
		fox.style.pointerEvents = 'auto';
	}
})

fox.addEventListener('click', function() {
	fox.classList.toggle('hmm');
	fox.classList.toggle('purple');

	if(fox.classList.value === 'purple') {
		dog.style.pointerEvents = 'none';
		cat.style.pointerEvents = 'none';
	}  
	if (fox.classList.value !== 'purple') {
		dog.style.pointerEvents = 'auto';
		cat.style.pointerEvents = 'auto';
	}
})


