$(document).ready((function() {

  $('parent').on('click', function() {
    $('faq-right-clm').load('faq-parents.html');
  })

  $('caregiver').on('click', function() {
    $('faq-right-clm').load('faq-caregivers.html');
  })
})
);
