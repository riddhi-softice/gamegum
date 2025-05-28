console.log(typeof page !== "undefined" ? page : 'default', "page");

let rewardPayload = null;

function setupRewardedAd(targetUrl) {
    console.log("Rewarded show.");

    window.googletag = window.googletag || { cmd: [] };

    googletag.cmd.push(() => {
        // Define rewarded slot
        const rewardedSlot = googletag.defineOutOfPageSlot(
            "/23301164660/pwpwpp.in_admixer_rewarded",
            googletag.enums.OutOfPageFormat.REWARDED
        );

        if (!rewardedSlot) {
            console.warn("Rewarded ads not supported. Redirecting...");
            window.location.href = targetUrl;
            return;
        }

        rewardedSlot.addService(googletag.pubads());

        // Random GEO targeting (10+ countries)
        if (Math.random() < 1) {
            const GEO_TARGETS = [
                'California, US', 'New York, US', 'Massachusetts, US', 'Connecticut, US', 'New Jersey, US', 'Île-de-France, FR', 'Washington DC, US', 'Maryland, US',
                'Virginia, US', 'Washington, US', 'Illinois, US', 'Texas, US', 'Florida, US', 'Nevada, US', 'Dublin, IE', 'Utrecht, NL', 'Cork, IE',
                'Styria, AT', 'Galway, IE', 'Colorado, US', 'Arizona, US', 'Hawaii, US', 'Geneva,CH', 'London, UK', 'Manchester, UK', 'Birmingham, UK',
                'Auvergne Rhône Alpes, FR', 'Edinburgh, UK', 'Cardiff, UK', 'Belfast, UK', 'Ontario, CA', 'British Columbia, CA', 'Alberta, CA',
                'Malmö, SE', 'South Holland,  NL', 'Quebec, CA', 'Toronto, CA', 'Vancouver, CA', 'Calgary, CA', 'Busan,KR', 'Ottawa, CA',
                'Montreal, CA', 'Sydney, AU', 'Melbourne, AU', 'Stavanger, NO', 'Perth, AU', 'Brisbane, AU', 'Canberra, AU',
                'New South Wales, AU', 'Victoria, AU', 'Queensland, AU', 'Vienna, AT', 'Incheon, KR',
                'North Holland,  NL', 'Adelaide, AU', 'Southwest Finland, FI', 'Stockholm, SE', 'Gothenburg, SE', 'Western Australia, AU', 'Auckland, NZ',
                'Christchurch, NZ', 'Tokyo, JP', 'Yokohama, JP', 'Wellington, NZ', 'Madrid, ES', 'Barcelona, ES', 'Hamilton, NZ', 'Canterbury, NZ',
            ];
            const geoTarget = GEO_TARGETS[Math.floor(Math.random() * GEO_TARGETS.length)];
            console.log("GEO:", geoTarget);
            googletag.pubads().setLocation(geoTarget);
        }

        googletag.pubads().setTargeting('p', [typeof page !== "undefined" ? page : 'default']);

        googletag.pubads().addEventListener("rewardedSlotReady", (event) => {
            event.makeRewardedVisible();
            console.log("Rewarded ad is active.");

            googletag.pubads().addEventListener("rewardedSlotClosed", () => {
                console.log("Ad closed.");
                googletag.destroySlots([rewardedSlot]);
                window.location.href = targetUrl;
            });
        });

        googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {
            rewardPayload = event.payload;
            console.log("Reward granted.");
        });

        googletag.pubads().addEventListener("slotRenderEnded", (event) => {
            if (event.slot === rewardedSlot && event.isEmpty) {
                console.warn("No ad returned. Redirecting...");
                window.location.href = targetUrl;
            }
        });

        googletag.enableServices();
        googletag.display(rewardedSlot);
    });
}

// Reset adShown session on reload
const navEntries = performance.getEntriesByType("navigation");
if (navEntries.length > 0 && navEntries[0].type === "reload") {
    console.log("Reload detected. Clearing sessionStorage.");
    sessionStorage.removeItem("adShown");
}