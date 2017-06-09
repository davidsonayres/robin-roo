$(document).ready((function() {

  $('promise-second').on('click', function() {
    $('promise-content-box').load('promise2.html');
    $('promise-first').css('display', 'none');
    $('promise-second').css('display', 'block');
  })

  $('promise-first').on('click', function() {
    $('promise-content-box').load('promise1.html');
    $('promise-second').css('display', 'none');
    $('promise-first').css('display', 'block');
  })
})
);
