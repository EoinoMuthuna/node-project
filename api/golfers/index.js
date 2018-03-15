import express from 'express';
import Golfers from './golfersModel';



const router = express.Router();

router.get('/', (req, res) => {
  Golfers.find((err, golfer) => {
   if (err) return handleError(res, err);
    return res.json(200, golfer);
  });
});

// Add a Golfer
router.post('/', (req, res) => {
     const newGolfer = req.body;
    if (newGolfer) {
           Golfers.create(newGolfer, (err, golfer) => {
              if (err) return handleError(res, err);
                 return res.status(201).json(golfer);
          });
      } else {
         return handleError(res, err);
      }
});


// Delete a contact
router.delete('/:id', (req, res) => {
  Golfers.findById(req.params.id, (err, golfer) => {
    if (err) return handleError(res, err);
    if (!golfer) return res.send(404);
    golfer.remove(function(err) {
      if (err) return handleError(res, err);
      return res.status(200).json({message: "Golfer deleted"});
    });
  });
});

// get golfer
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Golfers.findById(id, (err, golfer) => {
        if (err) return handleError(res, err);
        return res.status(200).json(golfer);
  } );
});


// add Tournament
router.post('/:id/tournament', (req, res) => {
   const id = req.params.id;
   const tournament = req.body;
   console.log('tournament: '+tournament);
   Golfers.findById(id, (err, golfer)=>{
     if (err) return handleError(res, err);
     if(!golfer){
      console.log('golfer seems to be empty:'+golfer);
     };
     golfer.tournament.push(tournament);
        golfer.save((err) => {
          if (err) return handleError(res, err);
           return res.status(200).json({message: " Tournament Added to Golfer"});
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
