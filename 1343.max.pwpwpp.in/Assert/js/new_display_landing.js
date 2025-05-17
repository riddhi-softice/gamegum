  
    function setupRewardedAd() {
        
          let rewardedSlot = null;

        console.log("ad function call..",rewardedSlot);
         
        window.googletag = window.googletag || { cmd: [] };
    
        googletag.cmd.push(() => {
            if (!rewardedSlot) {
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
                             console.log("Rewarded ad is close...");
                            showPreloadedPage();
                        } else {
                             console.log("Rewarded ad is close else...");
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
    
                    googletag.pubads().setTargeting('p', [typeof page !== "undefined" ? page : 'default']);
                    googletag.enableServices();
                }
            }
    
            if (rewardedSlot) {
                 console.log("Rewarded ad slot...",rewardedSlot);
                googletag.display(rewardedSlot);
            } else {
                console.warn("Rewarded ads not supported");
                loadRandomQuestion();
                showPreloadedPage();
            }
        });
        
         // Clear sessionStorage on page reload (if the page is reloaded, ad will show again)
        const navigationEntries = performance.getEntriesByType("navigation");
        // if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
        if (navigationEntries.length > 0) {
          console.log("Clearing sessionStorage after reload.");
          sessionStorage.removeItem("adShown");
        }
    }
