import golfersModel from './api/golfers/golfersModel';

const golfers = [
         {id: 1,
           gName: 'Tiger Woods',
            origin: 'USA',
            sponsor: 'Nike',
            tournament:[],
            fedxPoints: [10],
            seasonWins: 0,
          },
         {
            gName: 'Dustin Johnson',
            origin: 'USA',
            sponsor: 'TaylorMade',
            tournament:[],
            fedxPoints: [],
            seasonWins: 2,
          },
          {
            id: 3,
            gName: 'Rory Mclroy',
            origin: 'Northern Ireland',
            sponsor: 'Nike',
            tournament:[],
            fedxPoints: [],
            seasonWins: 1,
          },
          
      ];
export const loadGolfers = () => {
golfersModel.find({}).remove(function() {
    golfersModel.collection.insert(golfers, (err, docs)=>{
    if (err) {
      console.log(`failed to Load golfer Data`);
    } else {
      console.info(`${golfers.length} golfers were successfully stored.`);
    }
  });
});
};