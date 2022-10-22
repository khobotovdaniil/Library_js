import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});


// console.log($('.findme').siblings());
// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme1').addClass('12312'));
// console.log($('button').html('hello'));
$('button').fadeIn(1800);