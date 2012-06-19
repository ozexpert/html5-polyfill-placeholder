/*
 * Author: Young K. Park (youngkeunpark@gmail.com)
 * example usage: $("form").placeholder({'font-style':'normal', 'color':'#f2f2f2'});

 * The MIT License (MIT)
 * Copyright (c) 2012 Young K. Park (youngkeunpark@gmail.com)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function($){
	$.fn.placeholder = function(options){

        var opts = $.extend({}, $.fn.placeholder.defaults, options);

        //for each input, textarea find placeholder attr and treat it as value
        $.each(this.find("input, textarea"), function(i, val){
            var $originalColor = $(this).css("color");

            if($(this).attr("placeholder") && $(this).val().length == 0){
                setPlaceholder($(this));
            }

            $(this).on("focus", function(e){
                if($(this).data('init-placeholder')=='true'){
                    $(this).val("").css({'font-style':'normal', 'color':$originalColor}).removeData("init-placeholder");
                }
            });

            $(this).on("change", function(e){
                if($(this).val().length == 0){
                    setPlaceholder($(this));
                }
            });
        });
    
        function setPlaceholder(elem){
            elem.val(elem.attr("placeholder")).css({'font-style':$.fn.placeholder.defaults.fontStyle, 
                    'color':$.fn.placeholder.defaults.watermarkColor}).data('init-placeholder', 'true');
        }
	};

    $.fn.placeholder.defaults = {
        watermarkColor: '#ccc',
        fontStyle: 'italic'
    };
})(jQuery);
