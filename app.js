const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//Middleware

  app.use(bodyParser.json());

  
  app.use(cors());

//routes
const questions = require('./server/routes/api/questions');
app.use('/api/questions', questions);

// console.log(process.env.NODE_ENV)
//handle prod
// if(process.env.NODE_ENV == 'production'){
  //static folder
  app.use(express.static(__dirname + '/server/public/'));

  //handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/server/public/index.html'))
// }

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Running on port ${port}`));
