var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    beltApp      = express();
// require(path.join(__dirname, "./client/js/config/routes.js"))
var server = beltApp.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
beltApp.use( express.static( path.join( root, 'client' )));
beltApp.use( express.static( path.join( root, 'bower_components' )));
beltApp.use(bp.json())

require(path.join(root, './server/config/mongoose.js'));
require(path.join(root, './server/config/routes.js'))(beltApp);

io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	// (Listener) On Connection
 	console.log("Connected - Socket ID: ", socket.id);
  	// (Listener) On Disconnect
	socket.on('disconnect', function() {
		console.log("Disconnected - Socket ID: ", socket.id);
 	})
 	socket.on('created_poll', function(data) {
 		socket.broadcast.emit('poll_added', data);
 	})
});
