$(document).ready(function(){
	$(".loader").hide();
	  $(".choices").click(function(){
	  	 $.ajax({
	  	 	url:"https://uselessfacts.jsph.pl/api/v2/facts/random",
	  	 	type:"GET",
	  	 	beforeSend: function(){
	  	 	$(".textArea").html("<i class='myloader fa fa-circle-o-notch fa-spin' style='font-size:500%'></i>")
	  	 	},
	  	 	success:function(response,status){
	  	 	$(".textArea").html(response.text);
	  	 	},
	  	 	error: function(error,status){
	  	 		$(".textArea").html("<span style='color:red;'>Something went Wrong! please try later. </span>");
	  	 	}
	  	 });
	  });

});