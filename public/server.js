const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express(),
      { PORT : port = 8000 } = process.env;

      require('./server/config/database');

      app.use(express.static(path.join(__dirname, 'dist/public')));
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(require('./server/routes'));

      app.listen(port, () => console.log(`Express server listening on port ${port}`));
