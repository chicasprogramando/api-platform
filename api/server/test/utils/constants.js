const MOCKS = {
  USER: {
    user_name: "eleonora.lester@gmail.com",
    email: "eleonora.lester@gmail.com",
    firebase_id: "Jl4GiZBKKKfXMJbrsMd1FK3pOnX9",
  },
  PROFILE: {
    name: "Lele",
    image_path: "https://avatars3.githubusercontent.com/u/3179348?s=460&v=4",
    linkedin: "https://www.linkedin.com/in/eleonora-lester-7a432022",
    github: "http://www.github.com/elstr",
    twitter: "http://www.twitter.com/lele_lester",
  },
  SPECIALTIES: [
    { description: "Front End" },
    { description: "Back End" },
    { description: "QA" },
  ],
  SKILLS: [
    { description: "Redis" },
    { description: "Redshift" },
    { description: "React.js" },
    { description: "Redux.js" },
  ],
};

const PROPS = {
  USER: [
    "id",
    "user_name",
    "firebase_id",
    "email",
    "accepted_terms",
    "ProfileId",
    "updatedAt",
    "createdAt",
  ],
  PROFILE: [
    "id",
    "UserId",
    "name",
    "github",
    "twitter",
    "linkedin",
    "image_path",
    "createdAt",
    "updatedAt",
  ],
  SPECIALTY: ["id", "description", "createdAt", "updatedAt"],
  SKILL: ["id", "description", "createdAt", "updatedAt"],
};

const FAKE_ID = {
  USER: "5e016e8e-1804-4c35-abdd-9c0427989999",
  PROFILE: "da775875-5907-4f9e-a2bf-be9727c21bbf",
  SPECIALTY: "d0cc0eea-6331-4c40-a75d-6a00e9999999",
  SKILL: "fb7456a4-e25c-4e21-96e7-39ebd22cc99d",
};

const ROUTES = {
  userRoute: "/api/user",
  skillRoute: "/api/skill",
  profileRoute: "/api/profile",
  specialtiesRoute: "/api/specialty",
  mailerRoute: "/api/mailer",
};

module.exports = {
  MOCKS,
  PROPS,
  FAKE_ID,
  ROUTES,
};
