let blocks = document.querySelectorAll(".block")
blocks = [...blocks]

//zapala sie losowy div
const blockFlickerInator = function(){
	setInterval(function(){
		const position = Math.floor(Math.random() * blocks.length);
		blocks[position].classList.add("alpha");
		setTimeout(function(){
			blocks[position].classList.remove("alpha");
		}, 1000)
	}, 1000)


}
// klikniecie dodaje klase .alpha
const clickBlock = function(){
	activeBlock = this;
	activeBlock.classList.add("alpha");
}

// while true zmieniaj loswego diva co sekunde
const init = function(){
	for(let block in blocks){
		const position = Math.floor(Math.random() * blocks.length);
		blocks[position].classList.add("alpha");
	}
}
 
blockFlickerInator();