import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import golfersRouter from './api/golfers';
import mongoose from 'mongoose';
import {loadGolfers} from './golfersData';

dotenv.config();

const app = express();

const port = process.env.PORT;

// Connect to database
mongoose.connect(process.env.mongoDB);
// Populate DB with sample data
if (process.env.seedDb) {
  loadGolfers();
}


//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/golfers', golfersRouter);
app.use(express.static('public'));


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});





