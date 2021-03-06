import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import golfersRouter from './api/golfers';
import mongoose from 'mongoose';
import {loadGolfers} from './golfersData';
import {Mockgoose} from 'mockgoose';
import {loadUsers} from './userData';
import passport from './auth';
import usersRouth from "./api/users";

dotenv.config();

export const app = express();

const port = process.env.PORT;

// Connect to database
if (process.env.NODE_ENV == 'test') {
  // use mockgoose for testing
  const mockgoose=new Mockgoose(mongoose);
  mockgoose.prepareStorage().then(()=>{
    mongoose.connect(process.env.mongoDB);
  });
} else {
  // use real deal for everything else
  mongoose.connect(process.env.mongoDB);
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: '+ err);
    process.exit(-1);
});
// Populate DB with sample data
if (process.env.seedDb) {
  loadGolfers();
  loadUsers();
}


//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use('/api/golfers', golfersRouter);
app.use(express.static('public'));
app.use('/api/users', usersRouth);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

app.get('/',(req,res)=> {
  res.redirect('/api/golfers')
});

app.use('/api/golfers', passport.authenticate('jwt', {session: false}), golfersRouter);



