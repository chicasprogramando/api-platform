const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const server = require("../../index");
const { cleanDB } = require("./utils/helpers");
const { ROUTES } = require("./utils/constants");

chai.use(chaiHttp);

describe("\n ----- CLEAN UP TESTING DB-------------------------\n", () => {
  before(async () => await cleanDB());
  it("should return an empty array after cleaning the test DB", (done) => {
    chai
      .request(server)
      .get(`${ROUTES.userRoute}`)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal("success");
        expect(res.body.data).to.be.a("array");
        expect(res.body.data).to.have.lengthOf(0);
        done();
      });
  });
});
