//1
// $(document).ready(function () {
// 	$('#s').click(function(){
// 		$("p").show();
// 	});
// 	$('#h').click(function(){
// 		$("p").hide();
// 	});
// 	$('#t').click(function(){
// 		$("p").toggle(3000,function(){
// 			alert("ok");
// 		});
// 	});
// })




//2
// $(document).ready(function () {
// 	$('#d').click(function(){
// 		$("#div1").fadeOut();
// 	});
// })
// $(document).ready(function () {
// 	$('#g').click(function(){
// 		$("#div2").toggle();
// 	});
// })


//3
// $(document).ready(function () {
// 	$("#btn").click(function(){
// 		$("#rt").slideToggle(6000);
// 	});
// })

//4
// $(document).ready(function () {
// 	$("#bt").click(function(){
		 
//    var x = $("#diiv").width() + "</br>";
//     var y = $("#diiv").height() + "</br>";
//     var z =  $("#diiv").outerWidth(true) + "</br>";
//      var a = $("#diiv").outerHeight(true);
//    document.write(x + " "+ y +" "+ z +" "+ a);
// 	});
// })


//5
// $(document).ready(function(){
//   $("span").parent().css({"color": "red", "border": "2px solid black"});
//   $("span").parents("ul").css({"color": "red", "border": "2px solid red"});
//   $("span").parentsUntil("ul").css({"color": "red", "border": "2px solid lightblue"});
// });

//6
// $(document).ready(function(){
// $("div").children().css({"color": "orange", "border": "2px solid red"});
// $("div").find("h1").css({"color": "orange", "border": "2px solid red"});
// });

//7
/*$(document).ready(function(){
  $("h4").prev().css({"color": "red", "border": "2px solid red"});
  $("h4").prevAll().css({"color": "red", "border": "2px solid red"});
  $("h4").prevUntil("h1").css({"color": "red", "border": "2px solid red"});
});*/
/*(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();*/

$(function () {
  'use strict';
  var winH    = $(window).height();
      upperH  = $('.upper-bar').innerHeight();
      navH    = $('.navbar').innerHeight();

  $('.slider  .carousel-item').height(winH - (upperH + navH));
});