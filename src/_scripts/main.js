// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';

$(() => {
  // setInterval(function(){
  //   var $this = $('.section_wmfans .wmfan:last-of-type');
  //   var $next = $this.parent().children().first();
  //   $next.clone().appendTo($this.parent()).fadeIn();
  //   $('.section_wmfans').find(' .wmfan').css('animation','slide 2s linear infinite');
  //   $this.siblings('.wmfan:first').remove();
  // },2000);
    
  (function(){ 
    var $this = $('.section_wmfans .wmfan:last-of-type');
    var $next = $this.parent().children().first();
    $next.clone().appendTo($this.parent()).fadeIn();
    $('.section_wmfans').find(' .wmfan');
    $this.siblings('.wmfan:first').remove();
  })();
});