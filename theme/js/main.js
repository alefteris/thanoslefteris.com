jQuery(function ($) {
   $('.subscribe').on('click', function (event) {
       event.preventDefault();
       var z=document.createElement('script');
       z.src='https://www.subtome.com/load.js';
       document.body.appendChild(z);
   });
});
