 let showAd = true;
function createPopupAd() {
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
    }, 1500); // Show popup after 1.5 seconds
}
function closePopup() {
    document.getElementById("popupAdContainer").innerHTML = "";
    showAd = false;
}
createPopupAd();

