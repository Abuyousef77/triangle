
$(document).ready(function(){
  $("form#celebrityquiz").submit(function(){
    var age = parseInt($("input#age").val());
    var music = $("select#music").val();
    var gender = $("select#gender").val();

      if (age) {
        if (age > 50) {
          $('#mozart').show();
        }
        if (age < 50) {
          $('#bono').show();
        }
        if (music === "Rock" && age < 35){
          $('#shakira').show();
        }
        if (music === "Electro/House" && age < 25) {
          $('#rezz').show();
          $('#bono').hide();
        }
        if (music === "R&B" && gender === "Male"){
          $('#shakira').show();
        }
        if (music === "R&B" && gender === "Female"){
          $('#tupac').show();
        }
      } else {
        alert ('Please enter your age.');
      }


    event.preventDefault();
  });
});
