document.addEventListener("DOMContentLoaded", function () {

    // console.log("hre");   

    // MORE BUTTON CLICK INTRACTION --------------------------------------------------------------
    const moreButton = document.querySelector(".more-button");
    if (moreButton) {
        moreButton.addEventListener("click", function () {
            window.location.href = "https://freezgames.com"; 
        });
    }

    // HOME BUTTON CLICK INTRACTION --------------------------------------------------------------
    const homeButtonId = document.getElementById("homeButton");
    if (homeButtonId) {
        homeButtonId.addEventListener("click", function () {
            BackToHome();
        });
    }
    const homeButton = document.querySelector(".home-button");
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            BackToHome();
        });
    }
    const homeIcon = document.querySelector(".home-icon");
    if (homeIcon) {
        homeIcon.addEventListener("click", function () {
            BackToHome();
        });
    }
    const homeButtonPlay = document.querySelector(".home-button-play");
    if (homeButtonPlay) {
        homeButtonPlay.addEventListener("click", function () {
            BackToHome();
        });
    }
});

//  CUSTOM POPUP -------------------------------------------------------------------- -->
function BackToHome() {
    // After 1 seconds, redirect
    setTimeout(() => {
        window.location.href = "https://freezgames.com";
    }, 100);
}
