========================================
HTML 5 polyfill for placholder attribute
========================================
This is a jQuery plugin to use with Modernizr_ for older browsers to behave HTML 5 placeholder attribute. Must be used with Modernizr_ to test placeholder attribute, but it doesn't do harm if checking for placeholder attribute is not there.

.. _Modernizr: http://modernizr.com

-------------------
Example usage in js
-------------------
::

    if(!Modernizr.placeholder){
        $("form").placeholder();
    }

-------------------
Options
-------------------
There are two CSS attributes you can use. By default, font-style will be italic and color will be #ccc. However, to override those options, you could do the following.

::
    $("form").placeholder({'font-style':'normal', 'color':'#f2f2f2'});