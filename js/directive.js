angular.module('TodoApp').directive("scroll", function ($window) {
    return function($scope, element, attrs) {
      
        angular.element($window).bind("scroll", function() {
                 
                 offset =  this.pageYOffset;
                 $scope.offset = offset
                 opacity = 1- offset/230;
                 inopacity = (offset/230)
                 // bop = $('#bannerholder').css('top')
                 // numbop = parseInt(bop)
                 // newbop = numbop - (offset/10)
                 $('#bannerholder').css( "opacity", opacity );
                 // $('#bannerholder').css('top',newbop)
                 $('.navbar').css('background-color', 'rgba(255,255,255,'+ inopacity+')');
                 $('.navbar').css('border-color', 'rgba(121,121,121,'+ inopacity+')');

                 if (offset>30){
                    $('a').css('color','black')
                    $scope.black = true;
                 }else{
                    $('a').css('color','white')
                    $scope.black = false;
                 }


                    if (offset > (500)){
                       $('.jumptarget').each(function() {
                        if(offset >= $(this).offset().top - 300) {
                            var id = $(this).attr('id');
                            $('.menubutton').removeClass('active');
                            $('.menubutton[data-target='+ id +']').addClass('active');
                        }
                    });

                   } else{
                    $('.menubutton').removeClass('active');
                   };

                 
             
        });
    };
})
// .directive("resize", function($window){
//     return function(scope, element, attrs){
//         angular.element($window).bind('resize', function(){
//             $window.innerWidth > 500 ?
//                 $('.navbar-collapse').addClass('myNavbar') : $('.navbar-collapse').removeClass('myNavbar')
//         })
//     }
// })
;