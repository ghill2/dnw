const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index')
const should = chai.should();
const assert = require('assert');

chai.use(chaiHttp);

describe('create_account', () => {

  it('returns message', (done) => {
    let payload = {
      username: "ghill",
      password: "password12345",
    }
    chai.request(app)
      .post('/create_account')
      .send(payload)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });


});