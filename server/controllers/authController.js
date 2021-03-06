const User = require("../models/User");
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }
  
  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'That email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('User validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors;

}

// create json web token
const maxAge = 60 * 60;
const createToken = (user) => {
  return jwt.sign({ user }, 'navtra-secret', {
    expiresIn: maxAge,
  });
};

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { name, email, password, phoneNumber, dateOfBirth } = req.body;

  try {
    const user = await User.create({ name, email, password, phoneNumber, dateOfBirth  });

    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    delete user.password;
    delete user.roles;

    const token = createToken(user);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ jwt: token });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ message: "Incorrect Email or Password !" })
  }

}

// get list of users from db
module.exports.users_get = (req, res) => {
  User.find({}).then(function(user){
    res.send(user);
});
} 
