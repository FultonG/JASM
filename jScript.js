$(document).ready(function(){
  $("#midText").fadeIn("slow","linear");
  $("#middleDiv").delay(3000).fadeOut("slow","linear",function(){
    $("footer").fadeIn("slow", "linear");
    date();
  });

  if (annyang) {
    var help = function() {
      $("#midText").text("Jas, Checkout My Mixtape");
      $("#middleDiv").fadeIn("fast","linear");
    }

    var mixtape = function(){
      window.open('https://fultongarcia.com');
    }

    var chill = function(){
      window.open('https://www.netflix.com/browse');
    }

    var print = function(tag){
      console.log(tag);
    };
    var print1 = function(tag){
      console.log('Not Jas: '+ tag);
    };
  // Let's define our first command. First the text we expect, and then the function it should call

  var commands = {
    'Jazz help': help,
    'Jazz check out my mixtape': mixtape,
    'Jazz (net flicks)(Netflicks)(Netflix) and Chill': chill,
    'Jazz *tag': print,
    '*tag': print

  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}

});

function date(){
  var date = new Date($.now());
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  $("#weekday").text(dayNames[date.getDay()] + ", ");
  $("#month").text(monthNames[date.getMonth()] + " " );
  $("#day").text(date.getDate() + ", ");
  $("#year").text(date.getFullYear());


  setInterval( function() {
  	// Create a newDate() object and extract the seconds of the current time on the visitor's
  	var seconds = new Date().getSeconds();
  	// Add a leading zero to seconds value
  	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds + " ");
  	},1000);

  setInterval( function() {
  	// Create a newDate() object and extract the minutes of the current time on the visitor's
  	var minutes = new Date().getMinutes();
  	// Add a leading zero to the minutes value
  	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes + ":");
      },1000);

  setInterval( function() {
  	// Create a newDate() object and extract the hours of the current time on the visitor's
  	var hours = new Date().getHours();

    if(hours == 1){
      $("#weekday").text(dayNames[date.getDay()] + ", ");
      $("#month").text(monthNames[date.getMonth()] + " " );
      $("#day").text(date.getDate() + ", ");
      $("#year").text(date.getFullYear());
    }

    if(hours < 12){
      $("#meridianDesignation").text("A.M.");
      if(hours === 0){
        hours = 12;
      }
    }
    else{
      $("#meridianDesignation").text("P.M.");
    }

    if(hours > 12){
      hours = hours % 12;
    }

  	// Add a leading zero to the hours value
  	$("#hours").html(( hours < 10 ? "0" : "" ) + hours + ":");
      }, 1000);

}
