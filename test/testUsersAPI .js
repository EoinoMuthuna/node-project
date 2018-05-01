import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; 
// UNIT test begin
describe('Users API unit test', function() {
  this.timeout(120000); 
  
  it('should return a collection of JSON documents', function(done) {
   
    supertest(app)
    .get('/api/users')
    .expect('Content-type', /json/)
    .expect(200) 
    .end(function(err, res) {
       
        res.status.should.equal(200);
        done();
    });
  });

  //  add a user
  it('should register a user', function(done) {
    // post to /api/contacts
    supertest(app)
    .post('/api/users')
    .query({action: 'register'})
    .send({username: 'JDaly', password: 'tester1'})
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      res.status.should.equal(201);
      res.body.success.should.equal(true);
      done();
    });
  });

  // login a user
  it('should authenticate a user', function(done) {
    // post to /api/contacts
    supertest(app)
    .post('/api/users')
    .send({username: 'aaron', password: 'dylan'})
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      res.status.should.equal(200);
      res.body.token.substring(0, 3).should.equal('JWT');
      done();
    });
  });
});
