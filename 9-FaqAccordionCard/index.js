const titles = Array.from(document.getElementsByClassName("title"));
const descriptions = Array.from(document.getElementsByClassName("description"));
const arrowIcons = Array.from(document.querySelectorAll(".faqs img"));
let clickedTitle = null;

function hideAllDescriptions() {
    titles.forEach((title, index) => {
        title.style.fontWeight = "normal";
        descriptions[index].style.display = "none";
        arrowIcons[index].style.transform = "rotate(0deg)";
    });
}
titles.forEach((title) => {
    title.addEventListener("click", function () {
        const position = titles.indexOf(this);
        if (clickedTitle === this) {
            hideAllDescriptions();
            clickedTitle = null;
            return;
        }
        clickedTitle = this;
        hideAllDescriptions();

        titles[position].style.fontWeight = "bold";
        descriptions[position].style.display = "block";
        arrowIcons[position].style.transform = "rotate(180deg)";
    });
});
hideAllDescriptions();