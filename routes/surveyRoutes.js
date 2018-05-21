const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/ladakhTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    console.log("title", title);
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),

      dateSent: Date.now()
    });

    //Great place to send an email

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      const user = req.user.save();

      res.send(user);
    } catch (err) {
      //Log friendly error

      res.status(422).send(err);
    }
  });
};
