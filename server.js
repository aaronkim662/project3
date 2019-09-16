const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

const gearController = require('./controllers/gearController');
const locationController = require('./controllers/locationController');
const userController = require('./controllers/userController');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to the default route. 3001');
});
app.use('/location', locationController);
app.use('/gear', gearController);
app.use('/user', userController);
// eslint-disable-next-line
app.listen(PORT, () => console.log('up and running'));
