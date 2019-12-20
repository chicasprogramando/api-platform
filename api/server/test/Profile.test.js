const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

const server = require("../../index");
const { cleanDB } = require("./utils/helpers");
const { MOCKS, PROPS, FAKE_ID } = require("./utils/constants");

const profileRoute = "/api/profile";
const userRoute = "/api/user";

chai.use(chaiHttp);

describe("PROFILE", () => {
  let profileReturnedByPOST = {};

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
   * Test the /GET all profiles
   */
  describe("\n ----- GET /profile ------------------------------\n", () => {
    it("should return an empty array", done => {
      chai
        .request(server)
        .get(profileRoute)
        .end(function(err, res) {
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
    let newUser = {};
    // 1) Create a new user
    it("should create a new user in the DB", done => {
      chai
        .request(server)
        .post(userRoute)
        .send({ ...MOCKS.USER })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal("success");
          expect(res.body.data.ProfileId).to.equal(null);
          newUser = Object.assign({}, res.body.data);
          done();
        });
    });
    // 2) Assign a new profile to the user
    it("should create a new profile in the DB with new user id", done => {
      const newProfile = Object.assign({}, MOCKS.PROFILE, {
        specialties: MOCKS.SPECIALTIES,
        skills: MOCKS.SKILLS
      });
      console.log("*********************NEW PROFILE***************************", newProfile)
      
      chai
        .request(server)
        .post(profileRoute)
        .send({ ...newProfile, UserId: newUser.id })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.PROFILE.length; i++) {
            expect(res.body.data).to.have.property(PROPS.PROFILE[i]);
          }

          expect(res.body.data.UserId).to.equal(newUser.id);
          expect(res.body.data.github).to.equal(MOCKS.PROFILE.github);
          expect(res.body.data.twitter).to.equal(MOCKS.PROFILE.twitter);
          expect(res.body.data.linkedin).to.equal(MOCKS.PROFILE.linkedin);
          expect(res.body.data.image_path).to.equal(MOCKS.PROFILE.image_path);

          profileReturnedByPOST = Object.assign({}, res.body.data);

          done();
        });
    });

    it("should check that user.ProfileId is not null and is eq to the profile id created previously", done => {
      chai
        .request(server)
        .get(`${userRoute}/${newUser.auth_sub}`)
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
    it("should return 404 because user doesn't exist", done => {
      chai
        .request(server)
        .get(`${profileRoute}/${FAKE_ID.PROFILE}`)
        .end(function(err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should return a specific profile including specialties", done => {
      chai
        .request(server)
        .get(`${profileRoute}/${profileReturnedByPOST.id}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          // Validate profile properties and values
          expect(res.body.data).to.be.a("object");
          for (let i = 0; i < PROPS.PROFILE.length; i++) {
            expect(res.body.data).to.have.property(PROPS.PROFILE[i]);
          }
          expect(res.body.data.image_path).to.equal(MOCKS.PROFILE.image_path);
          expect(res.body.data.linkedin).to.equal(MOCKS.PROFILE.linkedin);
          expect(res.body.data.github).to.equal(MOCKS.PROFILE.github);
          expect(res.body.data.twitter).to.equal(MOCKS.PROFILE.twitter);

          // Validate profile specialties
          expect(res.body.data.specialty).to.be.a("array");
          expect(res.body.data.specialty[0]).to.be.a("object");
          expect(res.body.data.specialty[0]).to.have.property("id");
          expect(res.body.data.specialty[0]).to.have.property("description");
          res.body.data.specialty.map((s, i) => {
            const mockedSpecialty = MOCKS.SPECIALTIES[i];
            expect(s.id).to.equal(mockedSpecialty.id);
            expect(s.description).to.equal(mockedSpecialty.description);
          });
          
          // Validate profile SKILLS
          expect(res.body.data.skill).to.be.a("array");
          expect(res.body.data.skill[0]).to.be.a("object");
          expect(res.body.data.skill[0]).to.have.property("id");
          expect(res.body.data.skill[0]).to.have.property("description");
          res.body.data.skill.map((s, i) => {
            const mockedSkill = MOCKS.SKILLS[i];
            expect(s.id).to.equal(mockedSkill.id);
            expect(s.description).to.equal(mockedSkill.description);
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
    it("should return 404 because profile doesn't exist", done => {
      chai
        .request(server)
        .put(`${profileRoute}/${FAKE_ID.PROFILE}`)
        .send({
          linkedin: "https://www.linkedin.com/aaaa",
          twitter: "https://www.twitter.com/aaaa"
        })
        .end(function(err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });

    it("should return the profile updated", done => {
      chai
        .request(server)
        .put(`${profileRoute}/${profileReturnedByPOST.id}`)
        .send({
          linkedin: "https://www.linkedin.com/aaaa",
          twitter: "https://www.twitter.com/aaaa"
        })
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");

          expect(res.body.data).to.be.a("object");

          expect(res.body.data).to.have.property("linkedin");
          expect(res.body.data).to.have.property("twitter");

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
    it("should return 404 because profile doesn't exist", done => {
      chai
        .request(server)
        .delete(`${profileRoute}/${FAKE_ID.PROFILE}`)
        .end(function(err, res) {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal("error");
          done();
        });
    });
    it("should delete the profile created by POST", done => {
      chai
        .request(server)
        .delete(`${profileRoute}/${profileReturnedByPOST.id}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal("success");
          done();
        });
    });
  });
});
