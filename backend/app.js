const express = require('express');

const app = express();


app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: '1', title: 'First post', content: 'from the server 1' },
    { id: '2', title: 'second post', content: 'from the server 2' },
    { id: '3', title: 'third post', content: 'from the server 3' },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
