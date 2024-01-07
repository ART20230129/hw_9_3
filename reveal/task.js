
const reveal = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener("scroll", () => {
        reveal.forEach(item => {
                const top = item.getBoundingClientRect().top;
                const bottom = item.getBoundingClientRect().bottom;
                if (top >= 0 && bottom <= window.innerHeight) {
                        item.classList.add("reveal_active");
                }else{
                        item.classList.remove('reveal_active');
                }

        })
})


