// jQuery.noConflict();
(function($) {
    $(document).ready(function(){
        $('html').removeClass('no-js');
        
        $('.filter button').click(function() {
            $(this).toggleClass('active');
            
            if ($('.filter button.active').length) {
                $('.bookmark a').parent().hide();
                $('.filter button.active').each(function() {
                    $('.bookmark a.' + $(this).data('class')).parent().show();
                });
            } else {
                $('.bookmark a').parent().show();
            }
        });
    });
})(jQuery);