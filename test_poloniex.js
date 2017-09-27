const io = require('socket.io-client');

var socket = io('https://streamer.cryptocompare.com');

//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT and 5 for CURRENTAGG
//For aggregate quote updates use CCCAGG as market
var subscription = ['2~Poloniex~BTC~USD','2~Poloniex~ETH~USD'];

socket.emit('SubAdd', {subs:subscription} );

socket.on("m", function(message){
	var messageType = message.substring(0, message.indexOf("~"));
	var res = {};
	console.log(message)
});
