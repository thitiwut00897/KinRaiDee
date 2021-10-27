const express = require('express');
const app = express();


//connect mongodb
var mongoose = require('mongoose');
require('dotenv').config()
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res => console.log('CONNECTED TO DATABASE !!'))
    .catch(err => console.log(err));


// run on port 3000
const port = 3000;
app.listen(port, () => {
    console.log('server is running on port: ', port);
});


const userApi = require('./routes/api/userApi');
const recipeApi = require('./routes/api/recipeApi');
const userCommentApi = require('./routes/api/userCommentApi')
const vegetableApi = require('./routes/api/vegetableApi')
const notificationApi = require('./routes/api/notificationApi')

app.use(express.json());
  
app.use('/api/users', userApi);
app.use('/api/recipes', recipeApi);
app.use('/api/userComments', userCommentApi);
app.use('/api/vegetables', vegetableApi)
app.use('/api/notifications', notificationApi)

  