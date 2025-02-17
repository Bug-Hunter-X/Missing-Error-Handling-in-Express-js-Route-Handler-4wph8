const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUserById(userId, (err, user) => {
    if (err) {
      // Error handling is missing here
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // Handling for user not found is missing here
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));