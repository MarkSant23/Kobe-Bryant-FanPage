//click on button to wiki
function myFoo() {
    window.location.replace('https://en.wikipedia.org/wiki/Kobe_Bryant#Professional_career');
}

let injuries = () => {
    window.location.replace('https://bleacherreport.com/articles/1015940-a-gruesome-look-at-kobe-bryants-injury-history');
}

//smooth 
$(document).ready(function() {
    $('.kobe-title').click(function() {
        let buttons = $('#gumbovi').position().top;
        $('html,body').animate({ scrollTop: buttons }, 1000);

    })
});

//show NBA finals  
$(document).ready(function() {
    $('.active2').hide();
    $('#button2').click(function() {
        $('.active2').toggle(1200);
    });

});

$(document).ready(function() {
    $('.active3').hide();
    $('#button3').click(function() {
        $('.active3').toggle(1200);
    });

});