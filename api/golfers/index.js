import express from 'express';
import stubAPI from './stubAPI';



const router = express.Router();





// get all golfers
router.get('/', (req, res) => {
  const golfers = stubAPI.getAll();
  res.send({golfers: golfers});
});


// Add golfers
router.post('/', (req, res) => {
    const newPost = req.body;

    if (newPost && stubAPI.add(newPost.gName, newPost.origin, newPost.sponsor, newPost.fedxPoints, newPost.seasonWins)) {
         return res.status(201).send({message: 'golfers Created'});
    }
    return res.status(400).send({message: 'Unable to find Post in request.'});
});

// get a golfer
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const golfer = stubAPI.getGolfer(id);

       if (golfer) {
               return res.status(200).send(golfer);
              }
              return res.status(404).send({message: `Unable to find golfer ${id}`});
});


// Update a golfer
router.put('/:id', (req, res) => {
     const key = req.params.id;
     const updateGolfer = req.body;
     const index = stubAPI.map((golfer)=>{
return stubAPI.id;
}).indexOf(key);
            if (index !== -1) {
               golfers.splice(index, 1, {gname: updateGolfer.gname, sponsor: updateGolfer.sponsor,fedxPoints: updateGolfer.fedxPoints, seasonWins: updateGolfer.seasonWins });
               res.status(200).send({message: 'Golfer Updated'});
              } else {
          res.status(400).send({message: 'Unable to find Golfer in request. No Golfer Found in body'});
      }
});


// add fedxPoints
router.post('/:id/fedxPoints', (req, res) => {
     const id = req.params.id;
     const newfedxPoints = req.body;

            if (newfedxPoints && stubAPI.addfedxPoints(id, newfedxPoints.comment, newfedxPoints.author)) {
                 return res.status(200).send({message: `Post ${id} Commented`});
            }
            return res.status(404).send({message: `Unable to find Post ${id}`});
});

// add tournament
router.post('/:id/tournament', (req, res) => {
     const id = req.params.id;
     const newTournament = req.body;

            if (newTournament && stubAPI.addTournament(id, newTournament.tournament)) {
                 return res.status(200).send({message: `Tournament added`});
            }
            return res.status(404).send({message: `Unable to find golfer ${id}`});
});




export default router;
