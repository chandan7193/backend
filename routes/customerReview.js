const keys = require('../config/keys');


module.exports = app =>{
  app.post('/api/customer', (req,res)=>{
    const {title, subject, body, recipients } = req.body;

    const customerReview = new CustomerReview({
      experience_id,
      e_user_id,
      ratings,
      review,
      availability_id


    });

    //Great place to send an email

    const customerReview = await req.customerReview.save();
  });
};
