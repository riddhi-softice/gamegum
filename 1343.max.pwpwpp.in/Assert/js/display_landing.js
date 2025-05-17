let rewardedSlot = null;  // ✅ GLOBAL

function setupRewardedAd() {
    window.googletag = window.googletag || { cmd: [] };

    googletag.cmd.push(() => {
        // ✅ Destroy previous slot if it exists
        if (rewardedSlot) {
            googletag.destroySlots([rewardedSlot]);
            rewardedSlot = null;
        }

        // ✅ Create new slot
        rewardedSlot = googletag.defineOutOfPageSlot(
            "/22639388115/rewarded_web_example",
            googletag.enums.OutOfPageFormat.REWARDED
        );

        if (rewardedSlot) {
            rewardedSlot.addService(googletag.pubads());

            googletag.pubads().addEventListener("rewardedSlotReady", (event) => {
                event.makeRewardedVisible();
                console.log("Rewarded ad is active.");
                loadRandomQuestion();
            });

            googletag.pubads().addEventListener("rewardedSlotClosed", () => {
                if (rewardPayload) {
                    console.log("Rewarded ad is closed...");
                    showPreloadedPage();
                } else {
                    console.log("Rewarded ad closed without reward...");
                    setTimeout(showPreloadedPage, 20);
                }
            });

            googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {
                rewardPayload = event.payload;
                console.log("Reward granted.");
            });

            googletag.pubads().addEventListener("slotRenderEnded", (event) => {
                if (event.slot === rewardedSlot && event.isEmpty) {
                    console.log("No ad returned for rewarded ad slot...Navigate without the ad");
                    showPreloadedPage();
                    loadRandomQuestion();
                }
            });

            googletag.enableServices();
            googletag.display(rewardedSlot);
        } else {
            console.warn("Rewarded ads not supported");
            showPreloadedPage();
        }
    });
}
