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

$('.wrap').html(`
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>
`);

$('.dropdown-toggle').dropdown();

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