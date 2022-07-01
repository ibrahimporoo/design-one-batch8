// Code OF Question Section row => 277
let lis = document.querySelectorAll(".question .container .info li");
lis.forEach((el) => {
	el.addEventListener("click", (e) => {
		// e.target.classList.toggle("active");
		e.currentTarget.classList.toggle("active");
	})
})