// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 2000

    });

});



$(function() {
    $("#slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

});






$(window).scroll(function() {
    $(".slideanim").each(function() {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 400) {
            $(this).addClass("slide");
        }
    });
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: 27.697140, lng: 84.421034 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 18, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

$(document).ready(function() {
    $("#mock-test").click(function() {
        $("#myModal").modal();
    });
});