import express from 'express';
import Golfers from './golfersModel';



const router = express.Router();

router.get('/', (req, res) => {
  Golfers.find((err, golfers) => {
   if (err) return handleError(res, err);
    return res.json(200, golfers);
  });
});

// Add a Golfer
router.post('/', (req, res) => {
     const newGolfer = req.body;
    if (newGolfer) {
           Golfer.create(newGolfer, (err, golfer) => {
              if (err) return handleError(res, err);
                 return res.status(201).send({golfer});
          });
      } else {
         return handleError(res, err);
      }
});

// get golfer
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Golfer.findById(id, (err, golfer) => {
        if (err) return handleError(res, err);
        return res.send({golfer});
  } );
});


// add Tournament
router.post('/:id/tournament', (req, res) => {
   const id = req.params.id;
   const tournament = req.body;
   Golfer.findById(id, (err, golfer)=>{
     if (err) return handleError(res, err);
        golfer.tournament.push(tournament);
        post.save((err) => {
          if (err) return handleError(res, err);
           return res.status(201).send({golfer});
        });
  });
});




/*
 // add fedxPoints
router.post('/:id/fedxPoints', (req, res) => {
     const id = req.params.id;
     const newfedxPoints = req.body;

            if (newfedxPoints && stubAPI.addfedxPoints(id, newfedxPoints.comment, newfedxPoints.author)) {
                 return res.status(200).send({message: `Post ${id} Commented`});
            }
            return res.status(404).send({message: `Unable to find Post ${id}`});
});

*/

function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;
