const sendgrid = require("sendgrid");
const helper = sendgrid.mail;

const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email(
      "akanksha@letsdogether.com",
      "Akanksha from Dogether"
    );
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients); //method is being called which needs recipients is passed to this.recipients variable
    this.reply_to = { email: "hammad@letsdogether.com", name: "Hammad Jilani" };
    this.addContent(this.body);
    this.addClickTracking(); //we write this method because sendgrid redirect href to its own href for analytics purpose
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    this.recipients.forEach(recipient => {
      const personalize = new helper.Personalization();
      personalize.addTo(recipient);
      this.addPersonalization(personalize);
    });
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
