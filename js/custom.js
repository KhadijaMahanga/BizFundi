// JavaScript Document
$(document).ready(function(e) {	
    var currentBridePrice; //variable to hold current bride price
    var totalBridePrice = 0;	//variable to hold total brideprice incrementally
    

    /*On click of start over
	Set all values to default
	*/
    $('.start-over').click(function(){
        $('#hiddenPrice').html('0');
        $('#price').html('0');
        $('li').removeClass('selected-option');
        currentBridePrice = 0;

        /*Set elder's comments to default values*/
        $('#elder-comment').html('The elders are fasting on your behalf. Please see the elders in private');
        $('#fb-comment').html('As e be like this, you still want to collect bride price? There is God o!');
        $('#tw-comment').html('Tufiakwa!');
    });

    /*
	On select of option from category
    */
    $('.price-row').click(function(){

        /*Reverse computations
		If option has been selected from the category previously
		*/	
        if($(this).parent('ul').find('li').hasClass('selected-option')){
            x = $(this).parent('ul').find('li').find('a span').attr('id');									
            y = x.split(" ");
            var  operator = y[0];
            var amount = y[1];
            console.log(operator);			console.log(amount);
            if(operator == '+'){
                totalBridePrice = totalBridePrice-parseInt(amount);
                console.log(totalBridePrice);
            }
            if(operator == '-'){
                totalBridePrice = totalBridePrice+parseInt(amount);
                console.log(totalBridePrice);
            }
            if(operator == '%'){
                totalBridePrice = totalBridePrice + parseInt(currentBridePrice)*parseInt(amount)/100;
                console.log(totalBridePrice);
            }
            $(this).parent('ul').find('li').removeClass('selected-option');

            console.log(currentBridePrice);
        }

        /*Normal computations
		First time selection from category
		*/

        $(this).addClass('selected-option');	
        currentBridePrice = $('#hiddenPrice').html();
        currentBridePrice = parseInt(currentBridePrice.replace(",", ""));		
        var x = $(this).find('a span').attr('id');					
        y = x.split(" ");
        var  operator = y[0];
        var amount = y[1];
        if(operator == '+'){
            if (totalBridePrice != 0){
                totalBridePrice = totalBridePrice+parseInt(amount);
            }
            else totalBridePrice = parseInt(currentBridePrice)+parseInt(amount);
        }
        if(operator == '-'){
            if (totalBridePrice != 0){
                totalBridePrice = parseInt(currentBridePrice)-parseInt(amount);
            }
            else
                totalBridePrice = parseInt(currentBridePrice)-parseInt(amount);
        }
        if(operator == '%'){
            if (totalBridePrice != 0){
                totalBridePrice = parseInt(currentBridePrice) - ((parseInt(currentBridePrice)*parseInt(amount))/100);
            }
            else
                totalBridePrice = parseInt(currentBridePrice)-parseInt(amount);		
        }

        /*Insert elders comments based on total brideprice*/
        if(totalBridePrice >= 1000000){ 
            $('#elder-comment').html('Exclusive Wife Material! Any chewing gum boy that comes near you shall hear from Amadioha');
            $('#fb-comment').html('Exclusive Wife Material! Any chewing gum boy that comes near you shall hear from Amadioha.');
            $('#tw-comment').html('Exclusive Wife Material!');	

        }
        else if (totalBridePrice >= 600000){ 
            $('#elder-comment').html('Super Premium Babe! Your bride price is going to cause a war in this Africa.');
            $('#fb-comment').html('Super Premium Babe! Your bride price is going to cause a war in this Africa.');
            $('#tw-comment').html('Super Premium babe!');	  
        }
        else if (totalBridePrice >= 400000){ 
            $('#elder-comment').html('Premium Babe! Your wife material is 100 yards of cord lace.');
            $('#fb-comment').html('Premium babe! 100 yards of wife material.');
            $('#tw-comment').html('Premium babe!');	  
        }
        else if (totalBridePrice >= 300000) {
            $('#elder-comment').html('Chassis babe with NAFDAC Number!');
            $('#fb-comment').html('Chassis babe with NAFDAC number');
            $('#tw-comment').html('Chassis babe!');
        }
        else if (totalBridePrice >= 200000) {
            $('#elder-comment').html('You try make sense. 10 yards of wife material.');
            $('#fb-comment').html('Make sense! 10 yards of wife material');
            $('#tw-comment').html('Make sense babe!');
        }
        else if (totalBridePrice >= 100000) {
            $('#elder-comment').html('You have pass WAEC. 5 credit.');
            $('#fb-comment').html('Wife levels has passed WAEC. 5 credits.');
            $('#tw-comment').html('5 Credit WAEC pass');

        }
        else if (totalBridePrice >= 50000) {
            $('#elder-comment').html('Na only you waka come? We recommend two weeks of dry fasting and prayers for improvement.');
            $('#fb-comment').html('Two weeks of dry fasting and prayers recommended for improvement.');
            $('#tw-comment').html('Fasting recommended');
        }
        else if (totalBridePrice == 0) {
            $('#elder-comment').html('The elders are fasting on your behalf.');
            $('#fb-comment').html('The bride price is so low, the elders have proceeded on fasting and prayers.');
            $('#tw-comment').html('Tufiakwa!');
        }
        else if (totalBridePrice >= -50000) {
            $('#elder-comment').html('As e be like this, you still want to collect bride price? There is God o!');
            $('#fb-comment').html('As e be like this, you still want to collect bride price? There is God o!');
            $('#tw-comment').html('Tufiakwa!');
        }
        else{
            //if (totalBridePrice <= -10000) {
            $('#elder-comment').html('The elders are fasting on your behalf. Please see the elders in private');
            $('#fb-comment').html('As e be like this, you still want to collect bride price? There is God o!');
            $('#tw-comment').html('Tufiakwa!');
        }	
        console.log(totalBridePrice);	
        
        if(totalBridePrice >= 100000){
            var downloadLink = 'http://www.sillypetitions.com/cert.php?price='+totalBridePrice;
            $('#download-certificate').attr('href',downloadLink);
        }

        /*Insert brideprice in brideprice div*/
        $('#footer #price').html(addNeededComma(totalBridePrice));			
    });
});

/*Function to add needed commas to currency figure*/
function addNeededComma(str){
    return str.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

