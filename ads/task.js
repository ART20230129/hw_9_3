
const rotator = Array.from(document.querySelectorAll(".rotator__case"));
let index = 0

setInterval(() => {
        rotator[index].classList.toggle("rotator__case_active");
        index ++;
        if (index == rotator.length) {
                index = 0;
        }
        rotator[index].classList.toggle("rotator__case_active");

}, 1000);


