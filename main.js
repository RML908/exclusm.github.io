// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});


$(function () {

	$(".load-more").on ("click", function(){
         const btn = $(this);
         const loader = btn.find("span");
        $.ajax({
         	url: "Data.html",
         	type:"Get",

         	beforeSend: function(){
               btn.attr("disabled", true);
               loader.addClass("d-inline-block");
         	},
         	success: function(responce){
                    setTimeout(function(){
                 	loader.removeClass("d-inline-block");
                    btn.attr("disabled", false);
                    console.log(responce);
                 }, 1000);
         	},
         	error: function(){
         		alert("error!");
         		  loader.removeClass("d-inline-block");
                  btn.attr("disabled", false);
         	}
         });
	});
});