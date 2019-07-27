var express = require('express');
const Twitter = require('twitter');
var router = express.Router();

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

module.exports.test = function(io) {
	
		/* GET home page. */
	router.post('/', function (req, res, next) {

		const { search } = req.body;
		client.get(`search/tweets.json?q=${search}&count=100`, (error, tweets, response) => {
			if(error) return res.json({
				error: 'Could not get tweets'
			});
			res.json({
				message: 'Tweets getting successfully',
				tweets
			})
		});

		client.stream('statuses/filter', {track: search}, function(stream) {
			stream.on('data', function(event) {
				io.emit('notification', event)
			});
		
			stream.on('error', function(error) {
				io.emit('notification', error)
			});
		});
	});
}

module.exports.router = router;