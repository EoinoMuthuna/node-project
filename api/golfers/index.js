import express from 'express';
import Golfers from './golfersModel';
import _ from 'lodash';
import j2x from 'json2xml';


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


// Delete a golfer
router.delete('/:id', (req, res) => {
  Golfers.findById(req.params.id, (err, golfer) => {
    if (err) return handleError(res, err);
    if (!golfer) return res.send(404);
    golfer.remove(function(err) {
      if (err) return handleError(res, err);
      return res.status(204).json({message: "Golfer deleted"});
    });
  });
});

// get golfer
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Golfers.findById(id, (err, golfer) => {
        if (err) return handleError(res, err);
        res.format({
            'application/xml': function(){
              var golferPlain = golfer.toObject();
              return res.status(200).send(j2x({golfer: golferPlain}));}
            ,'default': function(){return res.status(200).json(golfer);}

          });
        //
  } );
});


//update a golfer
router.put('/:id',(req, res) =>{
  if (req.body._id) delete req.body._id;
  Golfers.findById(req.params.id, (err, golfer) =>{
    if (err) return handleError(res, err);
    if(!golfer) return res.send(404);
    const updated = _.merge(golfer, req.body);
    updated.save((err) => {
     if (err) return handleError(res, err);
     return res.json(200, golfer);

      });
  });
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
           return res.status(200).json({message: " Tournament and Result Added to Golfer"});
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
