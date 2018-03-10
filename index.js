import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import postsRouter from './api/golfers';
dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.use('/api/golfers', postsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});