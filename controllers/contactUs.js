const Contact = require('../models/contactus');

exports.contactUs = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const msg = req.body.msg;
  
  console.log("Contact Us Form");
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(msg);
  console.log("--------------------------");

  const con = {
    name,
    email,
    phone,
    message: msg
  }

  const contact = new Contact(con);

  try{
    await contact.save();
    res.status(201).send({msg: "Recorded"});

  }catch(err){
    console.log(err);
    res.status(500).send({msg: "failed", err: err})
  }

};