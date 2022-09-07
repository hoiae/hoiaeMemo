const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const memoRouter = require('./src/routes/memo-route');

app.use('/memos', memoRouter);

app.listen(9409, () => console.log('listening on port 9409....'));
