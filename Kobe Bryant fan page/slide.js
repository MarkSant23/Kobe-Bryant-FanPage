//toggle button
$(document).ready(function() {
    $('button').click(function() {
        $('p').toggle(1200);
    });

});

//slid up and down 
$(document).ready(function() {
    $('.up-down-header').click(function() {
        $('.up-down').removeClass('active');
        $(this).parent().addClass('active');
        $('.icon').text('+');
        $(this).children('.icon').text('-');
    });
});