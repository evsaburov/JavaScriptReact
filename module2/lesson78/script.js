import 'jquery'; 
import $ from 'jquery'; 


$('#btn');
_();

$(document).ready(
  
  $(".list-item:first").hover(function(){
    $(this).toggleClass('.active');
  });

  $('.list-item:eq(2)').on('click', function(){
    $('.image:even').fadeToggle('slow');
  });

  $('.list-item:eq(5)').on('click', function(){
    $('.image:add').animate({
      opacity:'toggle',
      height:'toggle',
    });
  });

  );
