const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
/*app.get('/', (req, res) => {
    res.send('HOME');
});*/

// Static Files Routes
app.use('/', express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});