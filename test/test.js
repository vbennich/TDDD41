// Import the dependencies for testing
let app= require('../app')
let chai = require('chai')
// Configure chai
let chaiHttp = require('chai-http')
var expect = chai.expect;
chai.use(chaiHttp);
chai.should();
describe("Tests", () => {
    describe("GET /1-10", () => {
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
         it("should return 1", (done) => {
              chai.request(app)
                  .get('/one')
                  .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.text).to.equal("1");
                    done();
                   });
          });
          it("should return 2", (done) => {
               chai.request(app)
                   .get('/two')
                   .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     expect(res.text).to.equal("2");
                     done();
                    });
           });
           it("should return 3", (done) => {
                chai.request(app)
                    .get('/three')
                    .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      expect(res.text).to.equal("3");
                      done();
                     });
            });
            it("should return 4", (done) => {
                 chai.request(app)
                     .get('/four')
                     .end((err, res) => {
                       res.should.have.status(200);
                       res.body.should.be.a('object');
                       expect(res.text).to.equal("4");
                       done();
                      });
             });
             it("should return 5", (done) => {
                  chai.request(app)
                      .get('/five')
                      .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        expect(res.text).to.equal("5");
                        done();
                       });
              });
              it("should return 6", (done) => {
                   chai.request(app)
                       .get('/six')
                       .end((err, res) => {
                         res.should.have.status(200);
                         res.body.should.be.a('object');
                         expect(res.text).to.equal("6");
                         done();
                        });
               });
               it("should return 7", (done) => {
                    chai.request(app)
                        .get('/seven')
                        .end((err, res) => {
                          res.should.have.status(200);
                          res.body.should.be.a('object');
                          expect(res.text).to.equal("7");
                          done();
                         });
                });
                it("should return 8", (done) => {
                     chai.request(app)
                         .get('/eight')
                         .end((err, res) => {
                           res.should.have.status(200);
                           res.body.should.be.a('object');
                           expect(res.text).to.equal("8");
                           done();
                          });
                 });
                 it("should return 9", (done) => {
                      chai.request(app)
                          .get('/nine')
                          .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            expect(res.text).to.equal("9");
                            done();
                           });
                  });
                  it("should return 10", (done) => {
                       chai.request(app)
                           .get('/ten')
                           .end((err, res) => {
                             res.should.have.status(200);
                             res.body.should.be.a('object');
                             expect(res.text).to.equal("10");
                             done();
                            });
                   });

    });
});
