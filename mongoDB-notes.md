## MongoDB Notes
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

### Creating a collection
A **collection** in MongoDB is the same as a _table_ in MySQL.
```javascript
dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
```
_Note:_ In MongoDB, a collection is not created until it gets content.

### Insert Into a collection
#### ```insertOne()``` -
* Insert a single document into a collection.
    * A **document** the same as a _record_ in MySQL.
    * The first _parameter_ is an **object** containing the name(s) and values(s) of each field in the document you want to insert.
    * It _also_ takes a **callback function** where you can work with any _errors_, or the _result_ of the insert.
    ```javascript
    var customer = { name: "Don joe", address: "123 S St." };
    dbo.collection("customers").insertOne(customer, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
    ```
#### ```insertMany()``` -
* Insert multiple documents into a collection.
    * The first _parameter_ is an **array of objects**, containing the data you want to insert.
    * _Also_ takes a **callback function** where you can work with any errors, or he result of the insertion.
    ```javascript
    dbo.collection("customers").insertMany(customers, function(err, res) {
        if (err) throw err;
        console.log(`Number of documents inserted: ${res.insertedCount}`);
        db.close();
    });
    ```
**Results Object** - 
* When executing the ```insertMany()``` method, a **_results_** object is returned.
    * Contains info about how the insertion affected the database.
    * Example of returned object:
    ```javascript
    {
        result: { ok: 1, n: 1 },
        ops: [
            { name: 'John', address: 'Highway 71', _id: 58fdbf5c0ef8a50b4cdd9a84 } ],
        insertedCount: 14,
        insertedIds: [ 58fdbf5c0ef8a50b4cdd9a84 ]
    }
    ```
* If you _do_ not specify an ```_id``` field then one will be added for you and a _unique_ id will be assigned to each document.
    * _Note:_ if you do specify an ```_id``` it **must** be _unique_.

# [Left off here](https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp)