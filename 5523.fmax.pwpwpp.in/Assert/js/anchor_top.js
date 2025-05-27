window.googletag = window.googletag || { cmd: [] };
var anchorSlot_top;
googletag.cmd.push(function () {
    anchorSlot_top = googletag.defineOutOfPageSlot('/23301164660/pwpwpp.in_admixer_stickybottom', googletag.enums.OutOfPageFormat.TOP_ANCHOR);
    if (anchorSlot_top) {
        anchorSlot_top.addService(googletag.pubads());
    }
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    if (Math.random() < 1) {
        const GEO_TARGETS = [
            'California, US', 'New York, US', 'Massachusetts, US', 'Connecticut, US', 'New Jersey, US', 'Washington DC, US', 'Maryland, US', 'Virginia, US',
            'Washington, US', 'Illinois, US', 'Texas, US', 'Florida, US', 'Nevada, US', 'Colorado, US', 'Arizona, US',
            'Hawaii, US', 'London, UK', 'Manchester, UK', 'Birmingham, UK', 'Edinburgh, UK', 'Cardiff, UK', 'Belfast, UK', 'Ontario, CA', 'British Columbia, CA', 'Alberta, CA',
            'Quebec, CA', 'Toronto, CA', 'Vancouver, CA', 'Calgary, CA', 'Ottawa, CA', 'Montreal, CA', 'Sydney, AU', 'Melbourne, AU',
            'Perth, AU', 'Brisbane, AU', 'Adelaide, AU', 'Canberra, AU', 'New South Wales, AU', 'Victoria, AU',
            'Queensland, AU', 'Western Australia, AU', 'Auckland, NZ', 'Wellington, NZ', 'Christchurch, NZ', 'Hamilton, NZ', 'Canterbury, NZ',
        ];
        const geoTarget =
            GEO_TARGETS[
            Math.floor(Math.random() * GEO_TARGETS.length)
            ];
        console.log("GEO", geoTarget);
        googletag.pubads().setLocation(geoTarget);
    }
});