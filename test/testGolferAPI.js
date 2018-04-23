import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; 

describe('Golfers API unit test', function() {
this.timeout(120000); 
it('should return collection of JSON documents', function(done) {
  supertest(app)
  .get('/api/golfers')
  .expect('Content-type', /json/)
  .expect(200) 
  .end(function(err, res) {
      res.status.should.equal(200);
      done();
  });
});
});

// #2 add a golfer
  it('should add a golfer', function(done) {
    // post to /api/golfer
    supertest(app)
    .post('/api/golfers')
    .send({firstName: 'Tiger', lastName: 'Woods' , handicap: '0.0' , origin: 'USA' ,
     sponsor: 'Nike' , homeTour:'PGA Tour' })
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      res.status.should.equal(201);
      res.body.should.have.property('_id');
      res.body.firstName.should.equal('Tiger');
      done();
    });
  });

  // update a golfer
it('should update a golfer', function(done) {
    const superserver = supertest(app);
    superserver
    .get('/api/golfers')
    .expect('Content-type', /json/)
    .expect(200) 
    .end(function(err, res) {
        const id = res.body[0]._id;
        superserver
  .put('/api/golfers/'+id)
  .send({sponsor:'cobra'})
  .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
       res.status.should.equal(200);
       res.body.sponsor.should.equal('cobra');
       done();
     });
            }
          );
     });

  // #3 delete a golfer
  it('should delete golfer', function(done) {
    const superserver = supertest(app);
    superserver
    .get('/api/golfers')
    .expect('Content-type', /json/)
    .expect(200) 
    .end(function(err, res) {
        const id = res.body[0]._id;
        superserver
            .delete('/api/golfers/'+id)
            .expect('Content-type', /json/)
            .expect(200) // This is HTTP response
            .end(function(err, res) {
              res.status.should.equal(204);
              done();
            });
           }
         );
    });


 