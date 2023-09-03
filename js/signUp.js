// Toggle the "change" class for the clicked element
function myFunction(x) {
    x.classList.toggle("change");
}

// Toggle the "open" and "active" class for the navigation menu and container
$(".container1, .nav .opt").click(function myFunction(x) {
    $(".nav").toggleClass("open");
    $(".container").toggleClass("active");
});

// Handle the accordion feature
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("opened");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
