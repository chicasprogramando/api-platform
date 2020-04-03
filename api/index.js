const pg = require('pg');
delete pg.native;

const config = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');

const userRoutes = require("./server/routes/UserRoutes");
const profileRoutes = require("./server/routes/ProfileRoutes");
const specialtyRoutes = require("./server/routes/SpecialtyRoutes");
const skillRoutes = require("./server/routes/SkillRoutes");
const mailerRoutes = require("./server/routes/MailerRoutes");
const { error } = require("./server/middlewares");

config.config();

const app = express();

app.use(cors({ origin: process.env.ORIGIN }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(compression());

const port = process.env.PORT || 8000;

app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/specialty", specialtyRoutes);
app.use("/api/skill", skillRoutes);
app.use("/api/mailer", mailerRoutes);

// when a random route is inputed
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this API."
  })
);

// Last middleware should always be error management
app.use(error);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app;
