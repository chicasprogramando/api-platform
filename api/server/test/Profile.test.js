const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

const server = require("../../index");
const { cleanDB } = require("./utils/helpers");
const {
  ROUTES,
  MOCKS,
  PROPS,
  FAKE_ID,
  TEST_TOKEN,
} = require("./utils/constants");

chai.use(chaiHttp);

describe("PROFILE", () => {
  let profileReturnedByPOST = {};
  let skillsFromGet, specialtiesFromGet;
  let newUser = {};

  let token = `Bearer ${TEST_TOKEN}`;

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
   * Test the /GET all profiles
   */
  describe("\n ----- GET /profile ------------------------------\n", () => {
    it("should return an empty array", (done) => {
      chai
        .request(server)
        .get(ROUTES.profileRoute)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.data).to.be.a("array");
          expect(res.body.data).to.have.lengthOf(0);
          done();
        });
    });
  });

  /*
   * Test the /POST profile
   */
  describe("\n ----- POST /profile ------------------------------\n", () => {
    // 1) Create a new user
    it("should create a new user in the DB", (done) => {
      chai
        .request(server)
        .post(ROUTES.userRoute)
        .send({ ...MOCKS.USER })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.ProfileId).to.equal(null);
          newUser = Object.assign({}, res.body.data);
          done();
        });
    });
    // Get the skills DB
    it("should get skills and specialties from the DB", (done) => {
      chai
        .request(server)
        .get(ROUTES.skillRoute)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          skillsFromGet = res.body.data.slice(0, 4);
          done();
        });
    });
    // Get the specialties DB
    it("should get specialties from the DB", (done) => {
      chai
        .request(server)
        .get(ROUTES.specialtiesRoute)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          specialtiesFromGet = res.body.data.slice(0, 2);
          done();
        });
    });

    // 2) Assign a new profile to the user
    it("should create a new profile in the DB with new user id", (done) => {
      const newProfile = Object.assign({}, MOCKS.PROFILE, {
        specialties: [...specialtiesFromGet],
        skills: [...skillsFromGet],
      });
      console.log(
        "*********************NEW PROFILE***************************",
        newProfile
      );

      chai
        .request(server)
        .post(ROUTES.profileRoute)
        .send({ ...newProfile, UserId: newUser.id })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.PROFILE.length; i++) {
            expect(res.body.data).to.have.property(PROPS.PROFILE[i]);
          }

          expect(res.body.data.UserId).to.equal(newUser.id);
          expect(res.body.data.name).to.equal(MOCKS.PROFILE.name);
          expect(res.body.data.github).to.equal(MOCKS.PROFILE.github);
          expect(res.body.data.twitter).to.equal(MOCKS.PROFILE.twitter);
          expect(res.body.data.linkedin).to.equal(MOCKS.PROFILE.linkedin);
          expect(res.body.data.image_path).to.equal(MOCKS.PROFILE.image_path);

          profileReturnedByPOST = Object.assign({}, res.body.data);

          done();
        });
    });

    it("should check that user.ProfileId is not null and is eq to the profile id created previously", (done) => {
      chai
        .request(server)
        .get(`${ROUTES.userRoute}/${newUser.id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          expect(res.body.data.ProfileId).to.equal(profileReturnedByPOST.id);

          done();
        });
    });
  });

  /*
   * Test the /GET specific profile
   */
  describe("\n----- GET /profile/:id ------------------------------\n", () => {
    it("should return 404 because user doesn't exist", (done) => {
      chai
        .request(server)
        .get(`${ROUTES.profileRoute}/${FAKE_ID.PROFILE}`)
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return a specific profile including specialties and skills", (done) => {
      chai
        .request(server)
        .get(`${ROUTES.profileRoute}/${profileReturnedByPOST.id}`)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          // Validate profile properties and values
          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.PROFILE.length; i++) {
            expect(res.body.data).to.have.property(PROPS.PROFILE[i]);
          }
          expect(res.body.data.name).to.equal(MOCKS.PROFILE.name);
          expect(res.body.data.image_path).to.equal(MOCKS.PROFILE.image_path);
          expect(res.body.data.linkedin).to.equal(MOCKS.PROFILE.linkedin);
          expect(res.body.data.github).to.equal(MOCKS.PROFILE.github);
          expect(res.body.data.twitter).to.equal(MOCKS.PROFILE.twitter);

          // Validate profile specialties
          expect(res.body.data.specialty).to.be.a("array");
          expect(res.body.data.specialty[0]).to.be.a("object");
          expect(res.body.data.specialty[0]).to.have.property("id");
          expect(res.body.data.specialty[0]).to.have.property("description");

          specialtiesFromGet.map((s) => {
            const specialtyFound = res.body.data.specialty.find(
              (resSpecialty) => resSpecialty.id === s.id
            );
            expect(specialtyFound).to.not.be.undefined;
          });

          // Validate profile SKILLS
          expect(res.body.data.skill).to.be.a("array");
          expect(res.body.data.skill[0]).to.be.a("object");
          expect(res.body.data.skill[0]).to.have.property("id");
          expect(res.body.data.skill[0]).to.have.property("description");
          skillsFromGet.map((s) => {
            const skillFound = res.body.data.skill.find(
              (resSkill) => resSkill.id === s.id
            );
            expect(skillFound).to.not.be.undefined;
          });

          done();
        });
    });
  });

  /*
   * Test the /PUT profile
   * Will update the profile created by POST above
   */
  describe("\n----- PUT /profile/:id ------------------------------\n", () => {
    it("should return 404 because profile doesn't exist", (done) => {
      chai
        .request(server)
        .put(`${ROUTES.profileRoute}/${FAKE_ID.PROFILE}`)
        .set("Authorization", token)
        .send({
          linkedin: "https://www.linkedin.com/aaaa",
          twitter: "https://www.twitter.com/aaaa",
        })
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });

    it("should return the profile updated", (done) => {
      chai
        .request(server)
        .put(`${ROUTES.profileRoute}/${profileReturnedByPOST.id}`)
        .set("Authorization", token)
        .send({
          name: "new name",
          linkedin: "https://www.linkedin.com/aaaa",
          twitter: "https://www.twitter.com/aaaa",
        })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");

          expect(res.body.data).to.have.property("name");
          expect(res.body.data).to.have.property("linkedin");
          expect(res.body.data).to.have.property("twitter");

          expect(res.body.data.name).to.equal("new name");
          expect(res.body.data.linkedin).to.equal(
            "https://www.linkedin.com/aaaa"
          );
          expect(res.body.data.twitter).to.equal(
            "https://www.twitter.com/aaaa"
          );

          done();
        });
    });
  });

  /*
   * Test the /DELETE profile
   * Will delete the profile created by POST above
   */
  describe("\n----- DELETE /profile/:id ------------------------------\n", () => {
    it("should return 404 because profile doesn't exist", (done) => {
      chai
        .request(server)
        .delete(`${ROUTES.profileRoute}/${FAKE_ID.PROFILE}`)
        .set("Authorization", token)
        .end(function (err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should delete the profile created by POST", (done) => {
      chai
        .request(server)
        .delete(`${ROUTES.profileRoute}/${profileReturnedByPOST.id}`)
        .set("Authorization", token)
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          done();
        });
    });
  });
});
