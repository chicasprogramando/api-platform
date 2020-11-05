const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

const server = require("../../index");
const { cleanDB } = require("./utils/helpers");
const { ROUTES, PROPS, FAKE_ID } = require("./utils/constants");

chai.use(chaiHttp);

describe("SKILL", () => {
  let skillCreatedByPOST = {};

  before(async () => {
    await cleanDB();
  });

  /*
   * Test the /GET default
   */
  describe("\n ----- GET / default msg -------------------------\n", () => {
    it("should show welcome message", (done) => {
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
   * Test the /GET all skills
   */
  describe("\n ----- GET /skill ------------------------------\n", () => {
    it("should return an array of skills", (done) => {
      chai
        .request(server)
        .get(ROUTES.skillRoute)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.a("array");
          expect(res.body.data).not.to.be.empty;
          done();
        });
    });
  });

  /*
   * Test the /POST skill
   */
  describe("\n ----- POST /skill ------------------------------\n", () => {
    it("should create a new skill in the DB", (done) => {
      const description = "Test Skill";
      chai
        .request(server)
        .post(ROUTES.skillRoute)
        .send({ description })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.SKILL.length; i++) {
            expect(res.body.data).to.have.property(PROPS.SKILL[i]);
          }

          expect(res.body.data.description).to.equal(description);

          skillCreatedByPOST = Object.assign({}, res.body.data);

          done();
        });
    });
  });

  /*
   * Test the /GET specific skill
   */
  describe("\n----- GET /skill/:id ------------------------------\n", () => {
    it("should return 404 because skill doesn't exist", (done) => {
      chai
        .request(server)
        .get(`${ROUTES.skillRoute}/${FAKE_ID.SKILL}`)
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return a specific skill", (done) => {
      chai
        .request(server)
        .get(`${ROUTES.skillRoute}/${skillCreatedByPOST.id}`)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.SKILL.length; i++) {
            expect(res.body.data).to.have.property(PROPS.SKILL[i]);
          }

          expect(res.body.data.id).to.equal(skillCreatedByPOST.id);
          expect(res.body.data.description).to.equal(
            skillCreatedByPOST.description
          );

          done();
        });
    });
  });
  /*
   * Test the /PUT skill
   * Will update the skill created by POST above
   */
  describe("\n----- PUT /skill/:id ------------------------------\n", () => {
    it("should return 404 because skill doesn't exist", (done) => {
      chai
        .request(server)
        .put(`${ROUTES.skillRoute}/${FAKE_ID.SKILL}`)
        .send({ description: "New test description" })
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return the skill updated", (done) => {
      const description = "Skill Updated";
      chai
        .request(server)
        .put(`${ROUTES.skillRoute}/${skillCreatedByPOST.id}`)
        .send({ description })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          expect(res.body.data).to.be.a("object");
          expect(res.body.data).to.have.property("description");
          expect(res.body.data.description).to.equal(description);
          done();
        });
    });
  });
  /*
   * Test the /DELETE skill
   * Will delete the skill created by POST above
   */
  describe("\n----- DELETE /skill/:id ------------------------------\n", () => {
    it("should return 404 because skill doesn't exist", (done) => {
      chai
        .request(server)
        .delete(`${ROUTES.skillRoute}/${FAKE_ID.SKILL}`)
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should delete the skill created by POST", (done) => {
      chai
        .request(server)
        .delete(`${ROUTES.skillRoute}/${skillCreatedByPOST.id}`)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          done();
        });
    });
  });
});
