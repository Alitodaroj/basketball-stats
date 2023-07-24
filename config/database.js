const basketball = require('mongoose');

basketball.connect(process.env.DATABASE_URL);

const db = basketball.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
