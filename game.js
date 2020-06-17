let blocks = document.querySelectorAll(".block")
blocks = [...blocks];

// losowy div zapala sie na moment
let flickerInator = function(){
		const position = Math.floor(Math.random() * blocks.length);

		blocks[position].classList.add("alpha");
		blocks[position].classList.remove("disabled");

		setTimeout(function(){
			if (!blocks[position].classList.contains("won")) {
				blocks[position].classList.remove("alpha");
				blocks[position].classList.add("disabled");
			}
		}, 1000)
}

setInterval(flickerInator, 1000)
let activeBlock = "";

//clikniety block zostaje odkryty na zawsze
const clickBlock = function(){
	activeBlock = this;
	if (!activeBlock.classList.contains("disabled")){
		activeBlock.classList.add("won")
		activeBlock.classList.add("alpha")
	}
}
//inicjator
const init = function(){
	blocks.forEach(block => {
		block.classList.add("disabled")
		block.addEventListener("click", clickBlock)
	})
}
init();
flickerInator();
