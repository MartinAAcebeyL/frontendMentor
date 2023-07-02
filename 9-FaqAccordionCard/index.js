const titles = Array.from(document.getElementsByClassName("title"));
const description = Array.from(document.getElementsByClassName("description"));
const arrowIcon = Array.from(document.querySelectorAll(".faqs img"));
let presionado = null;

description.forEach(element => {
    element.style.display = "none";
});

function normmalPosition(position) {
    titles[position].style.fontWeight = "normal";
    description[position].style.display = "none";
    arrowIcon[position].style.transform = "rotate(0deg)";
}

titles.forEach(title => {
    title.addEventListener("click", function () {
        const position = titles.indexOf(this);
        if (presionado == this) {
            normmalPosition(position);
            presionado = null;
            return;
        }
        presionado = this;
        for (let index = 0; index < description.length; index++) {
            normmalPosition(index);
        }

        titles[position].style.fontWeight = "bold";
        description[position].style.display = "block";
        arrowIcon[position].style.transform = "rotate(180deg)";
    });
});