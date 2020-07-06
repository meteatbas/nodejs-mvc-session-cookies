const User = require('../models/user');

exports.getLogin = (req, res, next) => {
   //   const isLoggedIn=req.get('Cookie').split(';')[0].trim().split('=')[0]==='true';
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5f0192d7eaeceb1b68148ba3')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

    // res.setHeader('Set-Cookie','loggedIn=true;HttpOnly');
    // req.isLoggedIn=true;//we store the user data this data will not be stored *

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
