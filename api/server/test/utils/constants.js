const MOCKS = {
  USER: {
    user_name: "jennydoe",
    auth_sub: "google-oauth2|999999999999999999999",
    email: "jennydoe@gmail.com"
  },
  PROFILE: {
    image_path: "https://avatars3.githubusercontent.com/u/3179348?s=460&v=4",
    linkedin: "https://www.linkedin.com/in/eleonora-lester-7a432022",
    github: "elstr",
    twitter: "http://www.twitter.com/lele_lester",
  },
  SPECIALTIES: [
    { id: "d0cc0eea-6331-4c40-a75d-6a00e6911943", description: "Front End" },
    { id: "3acc04bb-be14-4d38-be4a-56709805b461", description: "Back End" },
    { id: "2ff867dc-3465-4af3-bc27-5a74d177b31a", description: "QA" }
  ]
};

const PROPS = {
  USER: [
    "id",
    "user_name",
    "auth_sub",
    "email",
    "accepted_terms",
    "completed_profile",
    "ProfileId",
    "updatedAt",
    "createdAt"
  ],
  PROFILE: [
    "id",
    "UserId",
    "github",
    "twitter",
    "linkedin",
    "image_path",
    "createdAt",
    "updatedAt"
  ]
};

const FAKE_ID = {
  USER: "5e016e8e-1804-4c35-abdd-9c0427989999",
  PROFILE: "da775875-5907-4f9e-a2bf-be9727c21bbf"
};

module.exports = {
  MOCKS,
  PROPS,
  FAKE_ID
};
