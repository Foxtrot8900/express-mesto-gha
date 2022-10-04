const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { NOTFOUND_ERROR } = require('./errors/errors');

const { PORT = 3000 } = process.env;
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
   _id: '633bcfa3a209672e56a0a0c9',
  };

  next();
});

app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use('*', (req, res) => {
  res.status(NOTFOUND_ERROR).send({ message: 'Страница не найдена' });
});

app.listen(PORT, () => {

  console.log(`App listening on port ${PORT}`);
});
