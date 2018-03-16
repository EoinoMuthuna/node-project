import golfersModel from './api/golfers/golfersModel';

const golfers = [
         {
           firstName: 'Tiger',
           lastName:'Woods',
           handicap: 0.0,
           origin: 'USA',
            sponsor: 'Nike',
            tournament:[],
            homeTour: 'PGA Tour'
            
            
          },
         {
            firstName: 'Dustin',
            lastName:'Johnston',
            handicap: 0.0,
            origin: 'USA',
            sponsor: 'TaylorMade',
            tournament:[],
            homeTour:'PGA Tour'
            
           
          },
          {
            
            firstName: 'Rory ',
            lastName:'Mclroy',
            handicap: 0.0,
            origin: 'Northern Ireland',
            sponsor: 'Nike',
            tournament:[],
            homeTour:'PGA Tour'
            
            
          },

          {
            
            firstName: 'Matt ',
            lastName:'Fitzpatrick',
            handicap: 0.0,
            origin: 'England',
            sponsor: 'TaylorMade',
            tournament:[],
            homeTour:'European Tour'
            
            
          },

          {
            
            firstName: 'Paul ',
            lastName:'Dunne',
            handicap: 0.0,
            origin: 'Ireland',
            sponsor: 'Titliest',
            tournament:[],
            homeTour:'European Tour'
            
            
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