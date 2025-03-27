let showAd = true;

function loadAdScript() {
    if (!window.googletag) {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        script.onload = initializeAd;
        document.head.appendChild(script);
    } else {
        initializeAd();
    }
}

function initializeAd() {
    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
        window.googletag.defineSlot(
            "/23201071713/group1_display_landing_center",
            [[336, 280], [250, 250], [300, 250]],
            "div-gpt-ad"
        ).addService(window.googletag.pubads());
        window.googletag.pubads().enableSingleRequest();
        window.googletag.pubads().setCentering(true);
        window.googletag.enableServices();
        window.googletag.display("div-gpt-ad");
    });
}

function createPopupAd() {
    if (!showAd) return;

    setTimeout(() => {
        const popupAdContainer = document.getElementById("popupAdContainer");
        popupAdContainer.innerHTML = `
            <div class="popup-ad-container">
            <div class="popup-content">
                <span class="close-popup">&times;</span>
                <div id="div-gpt-ad"></div>
            </div>
            </div>
        `;

        loadAdScript();
        const closePopupButton = document.querySelector(".close-popup");
        closePopupButton.addEventListener("click", closePopup);

        showAdScript();
    }, 1500); // Wait for 1 second
}

function closePopup() {
    const popupAdContainer = document.getElementById("popupAdContainer");
    popupAdContainer.innerHTML = "";
    showAd = false;
}

function showAdScript() {
    const adSlot = document.getElementById("div-gpt-ad");
    if (adSlot) {
        initializeAd();
    }
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.popupOpen) {
        // Close the popup instead of navigating back
        closePopup();
    }
});
createPopupAd();

// // PAGE RIGHT CLICK DISABLE
// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
// 	// alert("Right-click is disabled!");
// });

// // VIEWING SOURCE DISABLE
// document.addEventListener("keydown", function (event) {
//     if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
//         event.preventDefault();
//         // alert("Viewing source is disabled!");
//     }
//     if (event.key === "F12" || (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "j" || event.key === "I" || event.key === "J"))) {
//         event.preventDefault();
//         // alert("Inspect Element is disabled!");
//     }
// });