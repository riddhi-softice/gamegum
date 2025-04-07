// // HOME BUTTON CLICK INTRACTION --------------------------------------------------------------
document.querySelector(".home-button").addEventListener("click", function () {
    
    console.log("home");
    gtag('event', 'home_button_click', {
        'event_category': 'Navigation',
        'event_label': 'Back to Home'
    });

    // Optional: small delay to ensure GA event is sent
    setTimeout(() => {
        window.location.href = "https://baseapk.me";
    }, 200); // 200ms delay
});

document.querySelector("homeButton").addEventListener("click", function () {
    console.log("home.");
    gtag('event', 'home_button_click', {
        'event_category': 'Navigation',
        'event_label': 'Back to Home'
    });

    // Optional: small delay to ensure GA event is sent
    setTimeout(() => {
        window.location.href = "https://baseapk.me";
    }, 200); // 200ms delay
});


// MORE BUTTON CLICK INTRACTION --------------------------------------------------------------------
document.querySelector(".more-button").addEventListener("click", function () {
    console.log("more");
    gtag('event', 'more_games_click', {
        'event_category': 'Navigation',
        'event_label': 'More Games Button'
    });
    window.location.href = "https://baseapk.me"; 
});