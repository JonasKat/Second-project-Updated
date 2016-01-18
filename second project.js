/* global $ */
$(document).ready(function() {
	$('.box').on('click', function () {
		var animations = [ 'crawl', 'dangle', 'jump', 'bounceOut', 'tada', 'shake'];
        var $box = $(this);
		var animation = animations[Math.floor(Math.random() * 6)];

		$box.addClass(animation);

		setTimeout(function () {
    	$box.removeClass(animation);
		}, 4000);
	});
    $(".fourth").on("click", function() {
		$(this).toggleClass("toggleFourth")
		if ($(this).hasClass("toggleFourth")) {
		$(this).animate({"top": "10px"});
		}else {
			$(this).animate({"top": "0"});
		}
    });
    
    //Try out of JSON
    function randomColor1 () {
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?",
        { numResults: 3 },
        function(colorPalettes) {
        printColors(colorPalettes);
        });
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
            console.log(colorPalettes[palette].title);
            console.log(colorPalettes[palette].colors[0]); //HEX color code
            };
            $("body").css({"background": "#"+colorPalettes[palette].colors[0]});
        };	
    }
    function randomColor2 () {
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?",
        { numResults: 5 },
        function(colorPalettes) {
        printColors(colorPalettes);
        });
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
            console.log(colorPalettes[palette].title);
            console.log(colorPalettes[palette].colors[0]); //HEX color code
            };
            $("body").css({"background": "#"+colorPalettes[palette].colors[1]});
        };	
    }
    function randomColor3 () {
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?",
        { numResults: 5 },
        function(colorPalettes) {
        printColors(colorPalettes);
        });
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
            console.log(colorPalettes[palette].title);
            console.log(colorPalettes[palette].colors[0]); //HEX color code
            };
            $("body").css({"background": "#"+colorPalettes[palette].colors[2]});
        };	
    }
    
    function randomColor4 () {
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?",
        { numResults: 5 },
        function(colorPalettes) {
        printColors(colorPalettes);
        });
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
            console.log(colorPalettes[palette].title);
            console.log(colorPalettes[palette].colors[0]); //HEX color code
            };
            $("body").css({"background": "#"+colorPalettes[palette].colors[3]});
        };	
    }
       function randomColor5 () {
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?",
        { numResults: 5 },
        function(colorPalettes) {
        printColors(colorPalettes);
        });
        function printColors(colorPalettes){
            for(var palette in colorPalettes){
            console.log(colorPalettes[palette].title);
            console.log(colorPalettes[palette].colors[0]); //HEX color code
            };
            var colorEffect = ({"background": "#"+colorPalettes[palette].colors[4]});
            $("body").css(colorEffect);
            
        };	
    }
    $(".first").on("click", randomColor1);
    $(".third").on("click", randomColor2);  
 	$(".sixth").on("click", randomColor3);
    $(".eigth").on("click", randomColor4); 
    $(".tenth").on("click", randomColor5);
     


});
