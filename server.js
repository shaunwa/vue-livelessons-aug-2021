const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/people', (req, res) => {
	res.send([{
		id: '123',
		name: 'Shaun',
		age: 100,
	}, {
		id: '234',
		name: 'John',
		age: 99,
	}, {
		id: '345',
		name: 'Jean',
		age: 20,
	}]);
});

app.listen(8000, () => {
	console.log('Server is listening on port 8000');
});