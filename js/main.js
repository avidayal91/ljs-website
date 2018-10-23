$(window).on("scroll", function(){	
    if($(window).scrollTop()){	
       $('header').addClass('bg-grey');	
       }	
    else{	
        $('header').removeClass('bg-grey');	
    }	
})


