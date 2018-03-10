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

// get golfers
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const newfedxPoints = req;

       if (post) {
               return res.status(200).send(post);
              }
              return res.status(404).send({message: `Unable to find Post ${id}`});
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





export default router;
