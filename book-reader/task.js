

const fonts = Array.from(document.querySelectorAll(".font-size")) //массив ссылок для последующего перебора
//const book = document.getElementById('book');
let book = document.querySelector('.book');
console.log(book);

fonts.forEach((item) => {
        item.addEventListener("click", (event)=> { //обработчик "кликов" по ссылкам разеров шрифтов
                event.preventDefault(); // отмена перехода по ссылке (иначе шрифт будет всегда "средний")
                let active = document.querySelector(".font-size_active");//поиск "активного" шрифта на панели управления
                active.classList.remove("font-size_active");//отключаем "активный" шрифт на панели управления
                item.classList.add("font-size_active"); //включаем выбранный шрифт на панели управлелния

                if (item.dataset.size === "big"){ // проверяем включение ссылки с data-size="big">
                        book.classList.remove("book_fs-small");
                        book.classList.add("book_fs-big");
                } else if (item.dataset.size === "small") { // проверяем включение ссылки с data-size="small">
                        book.classList.remove("book_fs-big");
                        book.classList.add("book_fs-small")
                } else {                                   // если выбран "средний" шрифт
                    book.classList.remove("book_fs-small");
                    book.classList.remove("book_fs-big");
                }


        })

})



