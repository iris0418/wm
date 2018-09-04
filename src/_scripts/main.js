// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';

$(() => {
  var sliderun;
  var slideFunc = function(){
    if($('.section_wmfans .wmfan').first().position().left <= '0'){
      var $this = $('.section_wmfans .wmfan').first();
      var itemNum =$('.section_wmfans .wmfan').length*2;
      $this.clone().appendTo($this.parent());
      // $this.remove();
      $('.wmfan').each(function() {
        // 
        if($('.wmfan')<itemNum)
        $(this).clone().appendTo($this.parent());
        $(this).animate({'left':'-=300'},2000);
      });
    }
  };
  sliderun = setInterval(slideFunc,2000);
  // $('.section_wmfans .wmfan').hover(function(){
  //   console.log(111111);
  //   clearInterval(sliderun);
  // },function(){
  //   console.log(2222);
  //   sliderun = setInterval(slideFunc,2000);
  // });

});