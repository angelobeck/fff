
var loaderIndex = 0;

function loader() {
    var name = importsList[loaderIndex];
    var element = document.createElement("SCRIPT");
    loaderIndex++;
    if (loaderIndex < importsList.length) {
        element.addEventListener("load", loader);
    } else {
        element.addEventListener("load", () => {
            setTimeout(startup, 20);
        });
    }
    element.src = name;
    document.body.parentElement.appendChild(element);
}

window.addEventListener("load", loader);
