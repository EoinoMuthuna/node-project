import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
  tournament: {type: String},
  result:{type: String},
  
  });

 const GolferSchema = new Schema({
     firstName: {type: String, required:true},
     lastName:{type: String, required:true},
     handicap: {type: Number, min:0.0, max:35.4, required:true},
     origin:  {type: String, required:true},
     sponsor:  {type: String, required:true},
     tournament: [TournamentSchema],
     homeTour:{type: String,enum:['PGA Tour','European Tour'],required:true},
     
  
 });
export default mongoose.model('golfers', GolferSchema);


