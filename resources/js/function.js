// AOS Animation
AOS.init({
    duration: 1500,
    once: false
});

// Animation Btn Scroll Up
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.animation-btn-scroll-up')
        .classList.add('animation-action-scroll-up');
    }
    else{
        document.querySelector('.animation-btn-scroll-up')
        .classList.remove('animation-action-scroll-up');
    }
}
document.querySelector('.animation-btn-scroll-up')
    .addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }); 
});
// End Animation Btn Scroll Up

// $(".service-description-zs").on('click', function () {
//     var div = $(this);

//     if (div.hasClass("txt-three-lines")) {
//         div.removeClass("txt-three-lines").addClass("show-txt-three-lines");
//     } else {
//         div.removeClass("show-txt-three-lines").addClass("txt-three-lines");
//     }
// });


// $(".oculto").hide();
// $(".ver-mas").click(function(){
//     var self = $(this);
//     self.next().toggle();
//     /////
//     if(self.val()=="Ver menos"){
//         self.val("Ver más");
//         $(self).removeClass("icon-chevronUp");
//         $(self).addClass('icon-chevronDown');
//     } else {
//         $(self).val ("Ver menos");
//         $(self).removeClass('icon-chevronDown');
//         $(self).addClass("icon-chevronUp");
//     }
// });