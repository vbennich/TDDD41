// Import the dependencies for testing
let app= require('../app')
let chai = require('chai')
// Configure chai
let chaiHttp = require('chai-http')
var expect = chai.expect;
chai.use(chaiHttp);
chai.should();
describe("Tests", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should return Hello World!", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     expect(res.text).to.equal("Hello World!");
                     done();
                  });
         });
    });
});
