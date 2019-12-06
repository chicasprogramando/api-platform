const chai = require("chai");
const chaiHttp = require("chai-http");

const server = require("../../index");
const User = require("../models/User");

chai.use(chaiHttp);

const { expect } = chai;
const should = chai.should();


/*
 * Test the /GET route
 */
describe("/", () => {
  it("should show welcome message", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals("Welcome to this API.");
        done();
      });
  });
});
