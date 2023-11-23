const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();
const port = 3000;

// Middleware to parse JSON and handle URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add express-session middleware
app.use(
  session({
    secret: 'your-secret-key', // Change this to a secure key
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy for authentication
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Replace this with your actual authentication logic
    // For now, let's authenticate any user with any password
    return done(null, { email });
  })
);

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user.email);
});

// Deserialize user from the session
passport.deserializeUser((email, done) => {
  // Replace this with your actual logic to fetch user from the database
  // For now, let's use a dummy user object
  const user = { email };
  done(null, user);
});

// Routes
app.get('/', (req, res) => {
  res.send('Home page');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
);

app.get('/dashboard', (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    res.send(`Welcome to the dashboard, ${req.user.email}!`);
  } else {
    res.redirect('/');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
