// Randomize the order of the people on the people page!
function randomize_order(){
	let parent = document.querySelector('.post-content');
	let people = document.querySelectorAll('.post-content > p');
	let shuffled = Array.from(people).sort(() => Math.random() - 0.5);
	shuffled.forEach(person => parent.appendChild(person));
}

document.addEventListener("load", randomize_order());