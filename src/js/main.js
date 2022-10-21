import './lib/lib';

$('button').on('click', function () {
    $(this).addAttributes('data1=1', 'data2=2').removeAttributes('data1');
});