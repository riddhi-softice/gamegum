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
             'California, US','New York, US','Massachusetts, US','Connecticut, US','New Jersey, US','Île-de-France, FR', 'Washington DC, US','Maryland, US',
            'Virginia, US','Washington, US','Illinois, US','Texas, US','Florida, US','Nevada, US','Dublin, IE','Utrecht, NL','Cork, IE', 
            'Styria, AT', 'Galway, IE', 'Colorado, US','Arizona, US','Hawaii, US','Geneva,CH', 'London, UK','Manchester, UK','Birmingham, UK',
            'Auvergne Rhône Alpes, FR','Edinburgh, UK','Cardiff, UK','Belfast, UK', 'Ontario, CA','British Columbia, CA','Alberta, CA',
            'Malmö, SE','South Holland,  NL', 'Quebec, CA','Toronto, CA','Vancouver, CA','Calgary, CA','Busan,KR', 'Ottawa, CA',
            'Montreal, CA','Sydney, AU','Melbourne, AU', 'Stavanger, NO', 'Perth, AU','Brisbane, AU', 'Canberra, AU',
            'New South Wales, AU','Victoria, AU','Queensland, AU','Vienna, AT', 'Incheon, KR',
           'North Holland,  NL','Adelaide, AU','Southwest Finland, FI', 'Stockholm, SE', 'Gothenburg, SE','Western Australia, AU', 'Auckland, NZ',
            'Christchurch, NZ','Tokyo, JP','Yokohama, JP','Wellington, NZ','Madrid, ES','Barcelona, ES','Hamilton, NZ','Canterbury, NZ',
        ];
        const geoTarget =
            GEO_TARGETS[
            Math.floor(Math.random() * GEO_TARGETS.length)
            ];
        console.log("GEO", geoTarget);
        googletag.pubads().setLocation(geoTarget);
    }
});