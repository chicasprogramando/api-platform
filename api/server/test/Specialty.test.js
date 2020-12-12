const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

const server = require("../../index");
const { ROUTES, PROPS, FAKE_ID } = require("./utils/constants");

chai.use(chaiHttp);

describe("SPECIALTY", () => {
  let specialtyCreatedByPOST = {};

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
   * Test the /GET all specialties
   */
  describe("\n ----- GET /specialty ------------------------------\n", () => {
    it("should return an array of specialties", (done) => {
      chai
        .request(server)
        .get(ROUTES.specialtiesRoute)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.a("array");
          expect(res.body.data).not.to.be.empty;
          done();
        });
    });
  });

  /*
   * Test the /POST specialty
   */
  describe("\n ----- POST /specialty ------------------------------\n", () => {
    it("should create a new specialty in the DB", (done) => {
      const description = "Test Specialty";
      chai
        .request(server)
        .post(ROUTES.specialtiesRoute)
        .send({ description })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.SPECIALTY.length; i++) {
            expect(res.body.data).to.have.property(PROPS.SPECIALTY[i]);
          }

          expect(res.body.data.description).to.equal(description);

          specialtyCreatedByPOST = Object.assign({}, res.body.data);

          done();
        });
    });
  });

  /*
   * Test the /GET specific specialty
   */
  describe("\n----- GET /specialty/:id ------------------------------\n", () => {
    it("should return 404 because specialty doesn't exist", (done) => {
      chai
        .request(server)
        .get(`${ROUTES.specialtiesRoute}/${FAKE_ID.SPECIALTY}`)
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return a specific specialty", (done) => {
      chai
        .request(server)
        .get(`${ROUTES.specialtiesRoute}/${specialtyCreatedByPOST.id}`)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.SPECIALTY.length; i++) {
            expect(res.body.data).to.have.property(PROPS.SPECIALTY[i]);
          }

          expect(res.body.data.id).to.equal(specialtyCreatedByPOST.id);
          expect(res.body.data.description).to.equal(
            specialtyCreatedByPOST.description
          );

          done();
        });
    });
  });
  /*
   * Test the /PUT specialty
   * Will update the specialty created by POST above
   */
  describe("\n----- PUT /specialty/:id ------------------------------\n", () => {
    it("should return 404 because specialty doesn't exist", (done) => {
      chai
        .request(server)
        .put(`${ROUTES.specialtiesRoute}/${FAKE_ID.SPECIALTY}`)
        .send({ description: "New test description" })
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return the specialty updated", (done) => {
      const description = "Specialty Updated";
      chai
        .request(server)
        .put(`${ROUTES.specialtiesRoute}/${specialtyCreatedByPOST.id}`)
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
   * Test the /DELETE specialty
   * Will delete the specialty created by POST above
   */
  describe("\n----- DELETE /specialty/:id ------------------------------\n", () => {
    it("should return 404 because specialty doesn't exist", (done) => {
      chai
        .request(server)
        .delete(`${ROUTES.specialtiesRoute}/${FAKE_ID.SPECIALTY}`)
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should delete the specialty created by POST", (done) => {
      chai
        .request(server)
        .delete(`${ROUTES.specialtiesRoute}/${specialtyCreatedByPOST.id}`)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          done();
        });
    });
  });
});
