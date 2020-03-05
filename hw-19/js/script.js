
const $addStick = $('#addStick');
const $list = $('.list');
const $newStick = '<li class="stick">' + '<button class="delete">X</button>' + '<textarea cols="30" rows="10"></textarea>' + '</li>';
const $delete = $('.delete');

$addStick.on('click',function(){
  $list.append($newStick);
});

$('.delete').on('click', function(){
  $(this).parents('.stick').remove();
});
