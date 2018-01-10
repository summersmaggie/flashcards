$(document).ready(function() {

$(".col-md-3").click(function() {
  $(this).children(".front").toggle();
  $(this).children(".back").toggle();
});

});
