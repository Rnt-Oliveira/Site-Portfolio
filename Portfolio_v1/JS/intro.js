

$('.textWord_about').hide();
$('.link').click(function () {
    $('.textWord_about, #menu_about').hide();
    $('.textWord_about[data-link=' + $(this).data('link') + ']').slideDown('fast')
});


