const fs = require('fs');
const path = require('path');

// Load user data from the JSON file
const userDataPath = path.join(__dirname, 'users.json');
const userData = JSON.parse(fs.readFileSync(userDataPath, 'utf-8'));

// ...

// Passport configuration
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Check username and password against user data
    const user = userData.users.find(u => u.username === username && u.password === password);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect credentials' });
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Fetch user from the user data
  const user = userData.users.find(u => u.id === id);
  done(null, user);
});
