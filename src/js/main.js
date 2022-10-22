import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

// $('button').on('click', function () {
//     $('div').eq(1).toggleClass('active');
// });

// $('div').click(function () {
//     console.log($(this).index());
// });


// console.log($('.findme').siblings());
// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme1').addClass('12312'));
// console.log($('button').html('hello'));
// $('button').fadeIn(1800);