$(function () {

  /* 
    1. #Introduction 하단 썸네일(.col)을 클릭하면 modal창 표시
    2. 닫기 버튼을 누르면 modal창 비표시
  */

  $('#Introduction .col').click(function () {
    $('#modal').addClass('on');
  });

  $('.btn-close').click(function(){
    $('#modal').removeClass('on');
  });

});


