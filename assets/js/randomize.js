function randomize_order(){
	console.log('randomizing')
	let parent = document.querySelector('.post-content');
	let people = document.querySelectorAll('.post-content > p');
	console.log(people);
	let shuffled = Array.from(people).sort(() => Math.random() - 0.5);
	shuffled.forEach(person => parent.appendChild(person));
	console.log(shuffled);
}

document.addEventListener("load", randomize_order());