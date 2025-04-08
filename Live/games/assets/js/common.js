document.addEventListener("DOMContentLoaded", function () {

    // console.log("hre");   

    // MORE BUTTON CLICK INTRACTION --------------------------------------------------------------
    const moreButton = document.querySelector(".more-button");
    if (moreButton) {
        moreButton.addEventListener("click", function () {
            console.log("more");
            gtag('event', 'more_games_click', {
                'event_category': 'Navigation',
                'event_label': 'More Games Button'
            });
            window.location.href = "https://baseapk.me"; 
        });
    }

    // HOME BUTTON CLICK INTRACTION --------------------------------------------------------------
    const homeButtonId = document.getElementById("homeButton");
    if (homeButtonId) {
        homeButtonId.addEventListener("click", function () {
            gtag('event', 'home_games_click', {
                'event_category': 'Navigation',
                'event_label': 'Play to Home'
            });
            BackToHome();
        });
    }
    const homeButton = document.querySelector(".home-button");
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            gtag('event', 'home_games_click', {
                'event_category': 'Navigation',
                'event_label': 'Play to Home'
            });
            BackToHome();
        });
    }
    const homeIcon = document.querySelector(".home-icon");
    if (homeIcon) {
        homeIcon.addEventListener("click", function () {
            gtag('event', 'home_games_click', {
                'event_category': 'Navigation',
                'event_label': 'Play to Home'
            });
            BackToHome();
        });
    }
    const homeButtonPlay = document.querySelector(".home-button-play");
    if (homeButtonPlay) {
        homeButtonPlay.addEventListener("click", function () {
            gtag('event', 'home_games_click', {
                'event_category': 'Navigation',
                'event_label': 'Play to Home'
            });
            BackToHome();
        });
    }
});

//  CUSTOM POPUP -------------------------------------------------------------------- -->
function BackToHome() {

    const overlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popupBox");
    const countdownElement = document.getElementById("countdown");
    const closeBtn = document.getElementById("closeBtn");
    const homeBtn = document.querySelector(".home-button");

    overlay.style.display = "block";
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.opacity = "1";
        homeBtn.style.zIndex = "0";
    }, 20); 

    let countdown = 5;
    countdownElement.textContent = countdown;
    closeBtn.style.display = "none";

    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(timer);
            closeBtn.style.display = "inline-block";

            // After 1 seconds, redirect
            // setTimeout(() => {
            //     overlay.style.display = "none";
            //     popup.style.opacity = "0";
            //     window.location.href = "http://baseapk.me";
            // }, 1000);
        }
    }, 1000);
}
function closeCustomPopup() {
    // Optional: hide popup before redirect
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupBox").style.opacity = "0";

    // Wait a bit before redirect (optional fade-out effect)
    setTimeout(() => {
        window.location.href = "http://baseapk.me";
    }, 200);
}
