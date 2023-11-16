const wrapper = document.querySelector(".wrapper");
const cards = document.querySelectorAll(".card");

wrapper.addEventListener("mousemove", (e) => {
	cards.forEach((card) => {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		card.style.setProperty("--x", `${x}px`);
		card.style.setProperty("--y", `${y}px`);
	});
});