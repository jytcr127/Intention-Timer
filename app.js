let buttonClicked = document.getElementsByClassName('div.hmm');




document.querySelectorAll('.hmm').forEach(h => {
	h.addEventListener('click', function() {
		h.classList.toggle('hmm');
		h.classList.toggle('purple');
	})
})