window.onload = function () {
	console.log("[script.js] loaded");

	const playIcons = document.querySelectorAll(".download-item-play i");
	const playButtons = document.querySelectorAll(".download-item-play");
	let audioObjects = {};

	playButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			const span = event.currentTarget;
			const songUrl = span.dataset.songUrl;
			const isPlaying = span.dataset.playing === "true";
			const icon = event.currentTarget.querySelector("i");

			if (isPlaying) {
				// stop the song and update the icon
				icon.classList.remove("fa-circle-pause");
				icon.classList.add("fa-circle-play");
				span.dataset.playing = "false";
				audioObjects[songUrl].pause();
			} else {
				// stop any currently playing songs
				playButtons.forEach((button) => {
					const buttonSpan = button;
					if (buttonSpan.dataset.playing === "true") {
						const buttonIcon = button.querySelector("i");
						buttonIcon.classList.remove("fa-circle-pause");
						buttonIcon.classList.add("fa-circle-play");
						buttonSpan.dataset.playing = "false";
						audioObjects[buttonSpan.dataset.songUrl].pause();
					}
				});

				// play the song and update the icon
				icon.classList.remove("fa-circle-play");
				icon.classList.add("fa-circle-pause");
				span.dataset.playing = "true";
				audioObjects[songUrl] = new Audio(songUrl);
				audioObjects[songUrl].play();
			}
		});
	});
};
