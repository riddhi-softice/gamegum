let cnt = 0;
let per = 0;
let red = setInterval(() => {

    let bar = document.querySelector(".progress");
    let percentage = setInterval(() => {
        per += 1;
        if (per >= cnt) clearInterval(percentage);
        document.querySelector(".text").innerHTML = `<p>${per}%</p>`;
    }, 100);
    cnt += 10;

if (cnt == 100) clearInterval(red);
    bar.style.width = cnt + "%";
    // console.log(cnt);
}, 600);