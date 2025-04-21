// ONLOAD POPUP ------------------------------------------------------------------------
let showAd = true;
function createPopupAd() {
    
    // Check if popupBox is currently visible
    // document.getElementById("popupOverlay").style.display = "none";
    // document.getElementById("popupBox").style.opacity = "0";
    
    if (!showAd) return;

    setTimeout(() => {
        const popupAdContainer = document.getElementById("popupAdContainer");
        popupAdContainer.innerHTML = `
            <div class="popup-ad-container">
                <div class="popup-content">
                    <span class="close-popup">&times;</span>
                    <ins class="adsbygoogle"
                         style="display:inline-block;width:336px;height:280px"
                         data-ad-client="ca-pub-8263720079379422"
                         data-ad-slot="1256574751"></ins>
                </div>
            </div>
        `;

        // Re-initialize AdSense Ads
        (adsbygoogle = window.adsbygoogle || []).push({});

        // Close popup on click
        document.querySelector(".close-popup").addEventListener("click", closePopup);
    }, 1000); // Show popup after 1.5 seconds
}

function closePopup() {
    document.getElementById("popupAdContainer").innerHTML = "";
    showAd = false;
}
createPopupAd();
    
// CUSTOM POPUP ------------------------------------------------------------------------
function openPopup() { 

    // Check if popupAdContainer is currently visible
    const adPopup = document.getElementById("popupAdContainer");
    const isAdPopupVisible = adPopup && adPopup.style.display !== "none" && adPopup.offsetHeight > 0;
    
    if (isAdPopupVisible) {
        console.log("Ad popup is already open, skipping custom popup.");
        return; // Stop here if the other popup is open
    }

    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popupBox").style.display = "block";

    setTimeout(() => {
        document.getElementById("popupBox").style.opacity = "1";
    }, 100);
    
    
     // Google Analytics tracking
    gtag('event', '100_play_now_popup_open', {
        'event_category': 'BeforeGamePopup',
        'event_label': 'Play Now from 100-play-online',
        'page_title': document.title,
        'page_location': window.location.href
    });


    // Start countdown
    let countdown = 5;
    const countdownElement = document.getElementById("countdown");
    const closeBtn = document.getElementById("closeBtn");
    countdownElement.textContent = countdown;

    // AFTER 5 SECOND SHOW CLOSE BUTTON
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(timer);
            closeBtn.style.display = "inline-block";
            
            // AFTER 2 SECOND AUTOMATIC REDIRECT WHITHOUT CLICK
            setTimeout(() => {
                window.location.href = "https://baseapk.me";
                document.getElementById("popupOverlay").style.display = "none";
                document.getElementById("popupBox").style.opacity = "0";
            }, 2000);
        }
    }, 1000);
}
function closeCustomPopup() {
    // Optional: hide popup before redirect
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupBox").style.opacity = "0";

    // Wait a bit before redirect (optional fade-out effect)
    setTimeout(() => {
        window.location.href = "https://baseapk.me";
    }, 200);
}