function myFunction(x) {
    x.classList.toggle("change");
}

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

$(document).ready(function(){
    $(".container1, .nav .opt").click(function myFunction(x) {
        $(".nav").toggleClass("open");
        $(".container").toggleClass("active");
    });
      
    $(".accordian-container").click(function(){
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active");
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up");
        $(this).children(".body").slideDown();
        $(this).addClass("active");
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down");
    });

    $(".nav ul li a, .go-down").click(function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash; 
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
            $(".nav ul li a").removeClass("active");
            $(this).addClass("active");
        }
    });
});

wow = new WOW({
    animateClass: 'animated',
    offset: 0,
});
wow.init();
