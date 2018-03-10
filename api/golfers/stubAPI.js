import _ from 'lodash';

  const golfers = [
         {id: 1,
            gName: 'Tiger Woods',
            origin: 'USA',
            sponsor: 'Nike',
            fedxPoints: [10],
            seasonWins: 0,
          },
         {
            id: 2,
            gName: 'Dustin Johnson',
            origin: 'USA',
            sponsor: 'TaylorMade',
            fedxPoints: [100],
            seasonWins: 2,
          },
          {
            id: 3,
            gName: 'Rory Mclroy',
            origin: 'Northern Ireland',
            sponsor: 'Nike',
            fedxPoints: [50],
            seasonWins: 1,
          },
          
      ];


     const stubAPI = {
         getAll: () => {
            return golfers;
          },
         add: (t, l, r, h) => {
              if (!(t && l && r && h)) return false;
              let id = 1;
              const last = _.last(golfers);
              if (last) {
                 id = last.id + 1;
              }
              let len = golfers.length;
              let newLen = golfers.push({
                  'id': id,
                 'gName': t, 'origin': l, 'sponsor': r, 'fedxPoints': [], 'seasonWins':h});
               return newLen > len?id:-1;
              },
         seasonWins: (id) => {
             const index = _.findIndex(golfers,
                   (post) => {
                    return post.id == id;
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
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                result = golfers[index];
                    }
            return result;
            },
         addFedxPoints: (postId, c, n) => {
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
            },
         
      };
    export default stubAPI;