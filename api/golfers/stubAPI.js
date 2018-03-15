import _ from 'lodash';

  const golfers = [
         {id: 1,
            gName: 'Tiger Woods',
            origin: 'USA',
            sponsor: 'Nike',
            tournament:[],
            seasonWins: 0,
          },
         {
            id: 2,
            gName: 'Dustin Johnson',
            origin: 'USA',
            sponsor: 'TaylorMade',
            tournament:[],
            seasonWins: 2,
          },
          {
            id: 3,
            gName: 'Rory Mclroy',
            origin: 'Northern Ireland',
            sponsor: 'Nike',
            tournament:[],
            seasonWins: 1,
          },
          
      ];


     const stubAPI = {
         getAll: () => {
            return golfers;
          },
         add: (t, l, r, p, h) => {
              if (!(t && l && r && p && h)) return false;
              let id = 1;
              const last = _.last(golfers);
              if (last) {
                 id = last.id + 1;
              }
              let len = golfers.length;
              let newLen = golfers.push({
                  'id': id,
                 'gName': t, 'origin': l, 'sponsor': r, 'fedxPoints': p, 'seasonWins':h});
               return newLen > len?id:-1;
              },
         



         seasonWins: (id) => {
             const index = _.findIndex(golfers,
                   (golfer) => {
                    return golfer.id == id;
                  } );
             if (index !== -1) {
                  golfers[index].seasonWins += 1;
                  return true;
                }
              return false;
           },

         getGolfer: (id) => {
            let result = null;
            const index = _.findIndex(golfers,
                   (golfer) => {
                    return golfer.id == id;
                  } );
             if (index !== -1) {
                result = golfers[index];
                    }
            return result;
            },
          

          addTournament: (golferId, x) => {
            let result = false;
            const golfer = stubAPI.getGolfer(golferId);
            let id = 1;
            if (golfer) {
            const last = _.last(golfer.tournament);
            if (last) {
               id = last.id + 1;
            }
            golfer.tournament.push({'id': id,
                     'Tournament': x} );
            result = true;
            }
          return result;
          },
         

         /*addFedxPoints: (postId, c, n) => {
            let result = false;
            const post = stubAPI.getGolfer(postId);
            let id = 1;
            if (post) {
            const last = _.last(post.fedxPoints);
            if (last) {
               id = last.id + 1;
            }
            post.fedxPoints.push({'id': id,
                     'fedxPoints': c,  'seasonWins': 0} );
            result = true;
            }
          return result;
            },*/
         
      };  
    export default stubAPI;