// JavaScript Document
jQuery(document).ready(function(e) {
	
	 jQuery("#qrimage").click(function(){
						openpay();
					});
       setTimeout(function(){
					 checkelectroneumresponse(1);
				 }, 5000);
});

function openpay()
{
	 code = "";
	 paymentid = jQuery("#paymentid").val();
	 outlet = jQuery("#outlet").val();
	 total = jQuery("#etn").val();
	 code = "etn-it-"+outlet+"/"+paymentid+'/'+total;
	 window.open("https://link.electroneum.com/jWEpM5HcxP?vendor=" + code);
}


function checkelectroneumresponse()
{
	sitebaseurl = jQuery("#sitebaseurl").val();
	jQuery("#donnation_amt").removeClass("borderred");
	donnation_amt = parseFloat(jQuery("#donnation_amt").val());
	
	 jQuery.ajax({
		type: "POST",
		cache: false,
		dataType: "json",
		url: sitebaseurl,
		data : jQuery("#electronium_payform :input").serialize(),
	 }).done(
	 function (data, textStatus){
		 
		 if(data.success == 0)
		 {
			 errorstring = '<div class="uk-alert" uk-alert><a href="" class="uk-alert-close uk-close"></a><p>'+data.message+'</p></div>';
			 //jQuery("#error_div").html(errorstring);
			 
			  setTimeout(function(){
				checkelectroneumresponse(1);
			 }, 5000);
			 
			 //jQuery("#electroniumform").submit();
			 //jQuery("#paymentprogress").hide();
		 }
		 if(data.success == 1)
		 {
			
			 jQuery("#paymentqr_div").hide();
			 jQuery("#thirddiv").show();
			 jQuery("#checkmark_svg").show();
			 jQuery("#ajaxtask").val('');
			 
			 setTimeout(function(){
				 jQuery("#electronium_payform").submit();
			 }, 3000);
		 }
		 
	 });

	
}