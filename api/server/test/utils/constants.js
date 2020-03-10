const { sign } = require("../../middlewares/secure");

const MOCKS = {
  USER: {
    user_name: "jennydoe",
    auth_sub: "google-oauth2|999999999999999999999",
    email: "jennydoe@gmail.com"
  },
  PROFILE: {
    name: "Lele",
    image_path: "https://avatars3.githubusercontent.com/u/3179348?s=460&v=4",
    linkedin: "https://www.linkedin.com/in/eleonora-lester-7a432022",
    github: "elstr",
    twitter: "http://www.twitter.com/lele_lester"
  },
  SPECIALTIES: [
    { id: "d0cc0eea-6331-4c40-a75d-6a00e6911943", description: "Front End" },
    { id: "3acc04bb-be14-4d38-be4a-56709805b461", description: "Back End" },
    { id: "2ff867dc-3465-4af3-bc27-5a74d177b31a", description: "QA" }
  ],
  SKILLS: [
    { id: "c7725624-6fb3-4a7f-9e6b-659d2a54592e", description: "Redis" },
    { id: "fb7456a4-e25c-4e21-96e7-39ebd22cc02d", description: "Redshift" },
    { id: "afb62a5e-8527-4cb8-966e-78edbdc94aac", description: "React.js" },
    { id: "eef36f53-acf8-416a-95e6-58b3eb9f653d", description: "Redux.js" }
  ]
};

const PROPS = {
  USER: ["id", "user_name", "auth_sub", "email", "accepted_terms", "ProfileId", "updatedAt", "createdAt"],
  PROFILE: ["id", "UserId", "name", "github", "twitter", "linkedin", "image_path", "createdAt", "updatedAt"],
  SPECIALTY: ["id", "description", "createdAt", "updatedAt"],
  SKILL: ["id", "description", "createdAt", "updatedAt"]
};

const FAKE_ID = {
  USER: "5e016e8e-1804-4c35-abdd-9c0427989999",
  PROFILE: "da775875-5907-4f9e-a2bf-be9727c21bbf",
  SPECIALTY: "d0cc0eea-6331-4c40-a75d-6a00e9999999",
  SKILL: "fb7456a4-e25c-4e21-96e7-39ebd22cc99d"
};

const TEST_TOKEN = sign(MOCKS.USER);

const ROUTES = {
  userRoute: "/api/user",
  skillRoute: "/api/skill",
  profileRoute: "/api/profile",
  specialtiesRoute: "/api/specialty",
  mailerRoute: "/api/mailer"
};

module.exports = {
  MOCKS,
  PROPS,
  FAKE_ID,
  TEST_TOKEN,
  ROUTES
};
