
console.log("These aren't the droids you're looking for.");

$('nav button').click(function(){
  $('.headerText').toggleClass('hidden');
})

$(window).resize(function(){

       if ($('.header').width() > 760 ){

              $('.headerText').removeClass('hidden');

       }

});
