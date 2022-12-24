const playIcons = document.querySelectorAll(".download-item-play i");
let audioObjects = {};

playIcons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const span = event.currentTarget.parentElement;
        const songUrl = span.dataset.songUrl;
        const isPlaying = span.dataset.playing === "true";
        const icon = event.currentTarget;

        if (isPlaying) {
            // stop the song and update the icon
            icon.classList.remove("fa-circle-pause");
            icon.classList.add("fa-circle-play");
            span.dataset.playing = "false";
            audioObjects[songUrl].pause();
        } else {
            // stop any currently playing songs
            playIcons.forEach((button) => {
                const buttonSpan = button.parentElement;
                if (buttonSpan.dataset.playing === "true") {
                    button.classList.remove("fa-circle-pause");
                    button.classList.add("fa-circle-play");
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