
//Back End
var isNotATriangle = function(side1, side2, side3) {
  if ((side1 + side2) <= side3) {
    return true;
  } else if ((side2 + side3) <= side1) {
    return true;
  } else if ((side1 + side3) <= side2) {
    return true;
  } else {
    return false;
  }
}

var isEquilateral = function(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
  return true;
  } else {
  return false;
  }
}

var isIsosceles = function(side1, side2, side3) {
  if (side1 === side2 || side2 === side3) {
    return true;
  } else if (side1 === side3){
    return true;
  }
}

var isScalene = function(side1, side2, side3) {
  if (side1 != side2 || side2 != side3) {
    return true;
  } else if (side1 != side3) {
    return true;
  }
}


//Front End
$(document).ready(function(){
  $("form#form").submit(function(event){
    var side1 = parseInt($("input#side1")).val();
    var side2 = parseInt($("input#side2")).val();
    var side3 = parseInt($("input#side3")).val();

    if (isNotATriangle(side1, side2, side3)) {
      alert('this is not a triangle');
    }

    if (isEquilateral(side1, side2, side3)) {
      $('#equilateral').show();
    }

    if (isScalene(side1, side2, side3)) {
      $('#scalene').show();
    }

    event.preventDefault();
  });
});
