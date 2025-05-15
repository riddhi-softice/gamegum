// Auto AdX
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8263720079379422";
    script.crossOrigin = "anonymous";

    document.head.appendChild(script);
})();

     
// Load gtag.js dynamically - Page Interaction Analitycs
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-5LR732BBVK";
  document.head.appendChild(script);
})();

// Init GA4
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-5LR732BBVK');
