const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFileSync('server.log', log + '\n');
	next();
});


// Mainenance Page Activator
// (INFO: Comment out to deactivate Maintenance Page - Uncomment to activate it)

// app.use((req,res,next) => {
// 	res.render('maintenance.hbs');
// });



app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		pageMsg: 'This is the Home Page for my NodeJS and ExpressJS website.'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
		pageMsg: 'This is the Home Page for my NodeJS and ExpressJS website.'
	});
});

app.get('/bad', (req, res) => {
	res.send({
		error: {
			message: 'API Request Failed',
			code: 'API_REQUEST_ERROR'
		}
	});
});

app.listen(3000, () => {
	console.log('Server is now running at:  http://localhost:3000');
});

//	res.send({
//		data: {
//			users: [
//				{
//					username: 'SuperPockyTanuki',
//					password: 'SushiYumYum'
//				},
//				{
//					username: 'RocketCat777',
//					password: 'CatchTwerpsPikachu'
//				},
//				{
//					username: 'HackerGod666',
//					password: 'AllYourBytesAreMine!'
//				}
//			]
//		}
//	});
