//animation input
$(() => {

    $("input").on("focus", function(event) {
        const div = $(this).parent(".input-field");
        const label = div.children("label");

        label.css("top", "-10px");
    });

    $("input").on("blur", function(event) {
        const div = $(this).parent(".input-field");
        const label = div.children("label");

        if ($(this).val().length == 0) {
            label.css("top", "12px");
        }
    });

});

//animation carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});