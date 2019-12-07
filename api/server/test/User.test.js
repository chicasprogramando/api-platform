const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

const server = require("../../index");
const { cleanDB } = require("./utils/helpers");
const { MOCKS, PROPS } = require("./utils/constants");

const baseRoute = "/api/user";

chai.use(chaiHttp);

describe("USER", () => {
  before(async () => {
    await cleanDB();
  });

  /*
   * Test the /GET default
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

  /*
   * Test the /GET all users
   */
  describe("GET /user", () => {
    it("should return an empty array", done => {
      chai
        .request(server)
        .get(baseRoute)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.a("array");
          expect(res.body.data).to.have.lengthOf(0);
          done();
        });
    });
  });
  
  /*
   * Test the /POST user
   */
  describe("POST /user", () => {
    it("should create a new user in the DB", done => {
      chai
        .request(server)
        .post(baseRoute)
        .send({ ...MOCKS.USER })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.USER.length; i++) {
            expect(res.body.data).to.have.property(PROPS.USER[i]);
          }

          expect(res.body.data.user_name).to.equal(MOCKS.USER.user_name);
          expect(res.body.data.auth_sub).to.equal(MOCKS.USER.auth_sub);
          expect(res.body.data.email).to.equal(MOCKS.USER.email);
          expect(res.body.data.accepted_terms).to.equal(false);
          expect(res.body.data.completed_profile).to.equal(false);
          expect(res.body.data.ProfileId).to.equal(null);

          done();
        });
    });
    it("should return 400 because user already exists in DB", done => {
      chai
        .request(server)
        .post(baseRoute)
        .send({ ...MOCKS.USER })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal("User already exists");
          done();
        });
    });
  });

  /*
   * Test the /GET specific user
   */
  describe("GET /user/:auth_sub", () => {
    it("should return a specific user", done => {
      chai
        .request(server)
        .get(`${baseRoute}/${MOCKS.USER.auth_sub}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.USER.length; i++) {
            expect(res.body.data).to.have.property(PROPS.USER[i]);
          }
          expect(res.body.data.user_name).to.equal(MOCKS.USER.user_name);
          expect(res.body.data.auth_sub).to.equal(MOCKS.USER.auth_sub);
          expect(res.body.data.email).to.equal(MOCKS.USER.email);
          done();
        });
    });
  });
});
