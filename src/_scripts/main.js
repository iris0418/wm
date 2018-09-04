// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';

$(() => {
  var sliderun;
  var slideFunc = function(){
    $('.section_wmfans .wmfan').each(function(){
      console.log('position----'+$(this).position().left);
      console.log('offset----'+$(this).offset().left);
      var $this = $(this);
      // $this.css('transform','translateX(-300px)');
      $this.animate({'left':'-=300'},2000);
      if($this.position().left <= '0'){
        $this.clone().appendTo($this.parent());
        $this.remove();
        // $('.section_wmfans .wmfan').not($this).animate({'left':'-=300'},2000);
      } else{ 
        // $('.section_wmfans .wmfan').animate({'left':'-=300'},2000);
      }
    });
    // if($('.section_wmfans .wmfan').position().left <= '0'){
    //   var $this = $('.section_wmfans .wmfan').first();
    //   $this.hide().animate({'left':'+=1800'},2000).show();
    //   // $this.clone().appendTo($this.parent());
    //   // $this.remove();
    //   $('.wmfan').each(function() {
    //     $(this).animate({'left':'-=300'},2000);
    //   });
    // }
  };
  // sliderun = setInterval(slideFunc,2000);
  // $('.section_wmfans .wmfan').hover(function(){
  //   console.log('this position   '+$(this).position().left );
  //   console.log('this offset  '+$(this).offset().left );
  //   // clearInterval(sliderun);
  // }
  // ,function(){
  //   console.log(2222);
  //   sliderun = setInterval(slideFunc,2000);
  // }
// );

});