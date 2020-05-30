const questions = document.querySelectorAll(".question-header");
questions.forEach(function (question) {
	question.addEventListener("click", function (e) {
		question.querySelector(".answer").classList.toggle("active-answer");
		question.querySelector("img").src = question
			.querySelector("img")
			.classList.contains("red-arrow")
			? `./dist/images/icon-arrow.svg`
			: `./dist/images/icon-arrow-red.svg`;
		question.querySelector("img").className = question
			.querySelector("img")
			.classList.contains("red-arrow")
			? ``
			: `red-arrow`;
	});
});
function toggleAnimation(element, animations, time, cb = new Function()) {
	element.classList.add(animations.first);

	setTimeout(function () {
		element.classList.add(animations.second);
		cb();

		setTimeout(function () {
			element.classList.remove(animations.first);
			element.classList.remove(animations.second);
		}, time);
	}, time);
}
const featuresData = {
	simple: {
		img: "./dist/images/illustration-features-tab-1.svg",
		title: "Bookmark in one click",
		more:
			"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
	},
	speedy: {
		img: "./dist/images/illustration-features-tab-2.svg",
		title: "Intelligent search",
		more:
			"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
	},
	easy: {
		img: "./dist/images/illustration-features-tab-3.svg",
		title: "Share your bookmarks",
		more:
			"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
	},
};
const handleFeaturesView = function () {
	const listFeatures = document.querySelectorAll(".list-features li");
	listFeatures.forEach((feature) => {
		const showcase = document.querySelector("#features .showcase");
		const content = document.querySelector("#features .content");

		feature.addEventListener("click", function (e) {
			const h2 = document.querySelector("#features .main h2");
			const p = document.querySelector("#features .main p");
			const img = document.querySelector("#features .main img");
			const currentFeature = featuresData[feature.dataset.feature];
			document
				.querySelector(".active-feature")
				.classList.remove("active-feature");
			feature.classList.add("active-feature");
			e.preventDefault();
			toggleAnimation(
				showcase,
				{ first: "scaleDown", second: "scaleUp" },
				600,
				function () {
					h2.textContent = currentFeature.title;
					p.textContent = currentFeature.more;
					img.src = currentFeature.img;
				}
			);
			toggleAnimation(
				content,
				{ first: "fadeOutRight", second: "fadeInRight" },
				800
			);
		});
	});
};
handleFeaturesView();
document.querySelector(".ham").addEventListener("click", function (e) {
	document.querySelector(".mobile-nav").classList.toggle("opened");
});
document.querySelector("#close").addEventListener("click", function (e) {
	document.querySelector(".mobile-nav").classList.toggle("opened");
});
