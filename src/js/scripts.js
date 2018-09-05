// jQuery.noConflict();
(function($) {
    $(document).ready(function(){
        $('html').removeClass('no-js');
        
        $('.filter button').click(function() {
            $(this).toggleClass('active');
            
            if ($('.filter button.active').length) {
                $('.bookmark a').parent().hide();
                $('.filter button.active').each(function() {
                    $('.bookmark a[class*="' + $(this).data('class') + '"]').parent().show();
                });
            } else {
                $('.bookmark a').parent().show();
            }
            
            $('.special-group').each(function() {
                if (!$(this).find('div:visible').length) {
                    $(this).prev().hide();
                } else {
                    $(this).prev().show();
                }
            });
        });
        
        $('.bookmark a').each(function(index) {
            var order = 0;
            do {
                order = Math.floor(Math.random() * $('.bookmark a').length);
            } while(order === 0);
            
            $(this).parent().addClass('order-' + order);
        });
    });
})(jQuery);