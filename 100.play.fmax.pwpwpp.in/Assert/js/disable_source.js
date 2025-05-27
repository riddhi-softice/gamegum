// load background image
// window.onload = function () {
//     document.body.classList.add("loaded");
// };


// // // PAGE RIGHT CLICK DISABLE
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

// ON LOAD CHEK DEVTOOLS OPEN OR CLOSE
function detectDevTools(openCallback, closeCallback) {
    let isOpen = false;
    const threshold = 160;

    const check = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        const devtoolsOpened = widthThreshold || heightThreshold;

        if (devtoolsOpened && !isOpen) {
            isOpen = true;
            openCallback && openCallback();
        } else if (!devtoolsOpened && isOpen) {
            isOpen = false;
            closeCallback && closeCallback();
        }
    };
    setInterval(check, 500); // Check every 500ms
}
window.onload = function () {
    detectDevTools(
        function onOpen() {
            // Redirect if dev tools are open
            window.location.href = "disable-devtool.html";
        },
        function onClose() {
            console.log("DevTools closed");
        }
    );
};


// RIGHT CLICK DISABLE OPEN FILE
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
        window.location.href = 'disable-devtool.html'; // Opens in the same tab
    //  window.open('disable-devtool.html','_newtab'); // To open in new tab
    // alert('Right-click is disabled to protect our content.');
});

// Disable keyboard shortcuts (Ctrl+U, Ctrl+Shift+I, F12, etc.)
document.onkeydown = function (e) {
    if (
        (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c' || e.key === 'i' || e.key === 'j')) ||
        e.key === 'F12' ||
        (e.metaKey && e.altKey && e.key === 'i')
    ) {
        e.preventDefault();
        // alert('Access to developer tools and source code is disabled to protect our content.');
        return false;
    }
    return true;
};

// Disable text selection
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
// Disable drag and drop
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});