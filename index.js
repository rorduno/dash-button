var moment = require('moment-timezone');;
var dash_button = require('node-dash-button');
var dash = dash_button("ac:63:be:ec:c1:ff", null, null, 'all'); 

console.log('listening...');

dash.on("detected", function (){
	var now = moment().tz('America/Chicago').format('MM-DD-YYYY hh:mm:ss a');
	console.log("timestamp @ " + now);
	// TODO : post
});


