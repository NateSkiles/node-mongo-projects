## MongoDB Notes
<br>

### Create a Database
#### Creating a Database
To create a database in MongoDB, you _first_ create a **MongoClient** object.

Then specify a _connection URL_ with the correct ip address and the name of the database you want to create.

If the db _does not already_ exists, MongoDB will _create_ one and make a _connection_ to it.

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
```

