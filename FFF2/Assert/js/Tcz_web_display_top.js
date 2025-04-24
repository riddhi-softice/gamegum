console.log(typeof page !== "undefined" ? page : 'default', "page");
window.googletag = window.googletag || { cmd: [] };
googletag.cmd.push(function () {
  googletag.defineSlot('/23201071713/web_display', [[300, 250], [300, 600], [320, 480], [336, 280]], 'div-gpt-ad-1741683912871-0').addService(googletag.pubads());
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().setCentering(true);
  googletag.pubads().setTargeting('p', [typeof page !== "undefined" ? page : 'default']);
  googletag.enableServices();
});