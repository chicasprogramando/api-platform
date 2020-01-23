const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

const server = require("../../index");
const { cleanDB } = require("./utils/helpers");
const { MOCKS, PROPS, FAKE_ID } = require("./utils/constants");

const userRoute = "/api/user";

chai.use(chaiHttp);

describe("USER", () => {
  
  let userCreatedByPOST = {};
 
  before(async () => {
    await cleanDB();
  });

  /*
   * Test the /GET default
   */
  describe("\n ----- GET / default msg -------------------------\n", () => {
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
  describe("\n ----- GET /user ------------------------------\n", () => {
    it("should return an empty array", done => {
      chai
        .request(server)
        .get(userRoute)
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
  describe("\n ----- POST /user ------------------------------\n", () => {
    it("should create a new user in the DB", done => {
      chai
        .request(server)
        .post(userRoute)
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
          expect(res.body.data.ProfileId).to.equal(null);

          userCreatedByPOST = Object.assign({}, res.body.data);

          done();
        });
    });
  });

  /*
   * Test the /GET specific user
   */
  describe("\n----- GET /user/:auth_sub ------------------------------\n", () => {
    it("should return 404 because user doesn't exist", done => {
      chai
        .request(server)
        .get(`${userRoute}/google-oauth2|000000`)
        .end(function(err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return a specific user", done => {
      chai
        .request(server)
        .get(`${userRoute}/${MOCKS.USER.auth_sub}`)
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
  /*
   * Test the /PUT user
   * Will update the user created by POST above
   */
  describe("\n----- PUT /user/:id ------------------------------\n", () => {
    it("should return 404 because user doesn't exist", done => {
      chai
        .request(server)
        .put(`${userRoute}/${FAKE_ID.USER}`)
        .send({ user_name: "janedoe", email: "janedoe@gmail.com" })
        .end(function(err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return the user updated", done => {
      chai
        .request(server)
        .put(`${userRoute}/${userCreatedByPOST.id}`)
        .send({ user_name: "janedoe", email: "janedoe@gmail.com" })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");

          expect(res.body.data).to.have.property("user_name");
          expect(res.body.data).to.have.property("email");

          expect(res.body.data.user_name).to.equal("janedoe");
          expect(res.body.data.email).to.equal("janedoe@gmail.com");

          done();
        });
    });
  });
  /*
   * Test the /DELETE user
   * Will delete the user created by POST above
   */
  describe("\n----- DELETE /user/:id ------------------------------\n", () => {
    it("should return 404 because user doesn't exist", done => {
      chai
        .request(server)
        .delete(`${userRoute}/${FAKE_ID.USER}`)
        .end(function(err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should delete the user created by POST", done => {
      chai
        .request(server)
        .delete(`${userRoute}/${userCreatedByPOST.id}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          done();
        });
    });
  });
});
