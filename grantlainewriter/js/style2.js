$(document).ready(function(){

//   $('.col-1-5').click(function(){
 //       $(".modal").modal({backdrop: true});
 //   });

//$(document).ready(function() {

//  $('.panel1').mouseenter(function() {
//     $(this).fadeIn(300);
////   }, function() {
////       $(this).find('.title').fadeOut(100);
//   });
//

    $('.panel').mouseenter(function(){
        $(this).children('h1').fadeIn();
    })
    $('.panel').mouseleave(function(){
        $(this).children('h1').fadeOut();
    })

    $('.panel').mouseenter(function(){
        $(this).children('h2').fadeIn();
    })
    $('.panel').mouseleave(function(){
        $(this).children('h2').fadeOut();
    })

    $(document).ready(function() {
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});

});


