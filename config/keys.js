// keys.js - determine which credentials to return
if (process.env.NODE_ENV === 'production') {
	// Production: return prod keys
	module.exports = require('./prod');
} else {
	// Development: return dev keys
	module.exports = require('./dev');
}
