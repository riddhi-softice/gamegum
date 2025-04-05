// Float adx
function adjustAdPosition() {
    let container = document.querySelector(".container");
    let screenWidth = window.innerWidth;
    if (container) {
        let containerRect = container.getBoundingClientRect(); // Get container position
        let adOffset = containerRect.left - 420; // Space from container

        let leftAd = document.getElementById("FloatAdx-left");
        let rightAd = document.getElementById("FloatAdx-right");

        if (leftAd && rightAd) {
            leftAd.style.left = `${Math.max(10, adOffset)}px`;
            rightAd.style.right = `${Math.max(10, adOffset)}px`;
        }
    }
}
// Run on page load and resize
window.addEventListener("load", adjustAdPosition);
window.addEventListener("resize", adjustAdPosition);


// Load after 3 secound , bxz dynamic js load take time
function loadAds() {
    let screenWidth = window.innerWidth;
    // Only load ads if screen width is greater than 1024px (Desktop)
    if (screenWidth > 1024) {
        document.getElementById("FloatAdx-left").style.display = "block";
        document.getElementById("FloatAdx-right").style.display = "block";

        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}
// Run after 3 seconds
setTimeout(loadAds, 3000);