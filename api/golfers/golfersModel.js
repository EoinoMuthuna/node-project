import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
  tournament: {type: String, required:true},
  
  });

 const GolferSchema = new Schema({
     gName: {type: String, required:true},
     origin:  {type: String, required:true},
     sponsor:  {type: String, required:true},
     tournament: [TournamentSchema],
     fedxPoints: {type: String, required:true},
     seasonWins: {type: String, required:true},
  
 });
export default mongoose.model('golfers', GolferSchema);
