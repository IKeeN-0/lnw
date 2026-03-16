const express = require('express');
const UserSerializer = require('./serializers/user.serializer'); 
const app = express();

app.get('/api/users/:id', (req, res) => {
  const userData = {
    id: req.params.id,
    firstName: 'Somsak',
    lastName: 'Dev',
    email: 'somsak@example.com',
    occupation: 'Software Engineer'
  };

  const jsonApiData = UserSerializer.serialize(userData);
  
  res.set('Content-Type', 'application/vnd.api+json');
  
  res.send(jsonApiData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`JSON:API Server is running on http://localhost:${PORT}`);
});