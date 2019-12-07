const MOCKS = {
  USER: {
    user_name: "jennydoe",
    auth_sub: "google-oauth2|999999999999999999999",
    email: "jennydoe@gmail.com"
  }
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
  ]
};

module.exports = {
  MOCKS,
  PROPS
};
