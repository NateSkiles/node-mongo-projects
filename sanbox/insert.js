var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// Insert one
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var customer = {
//         name: "Don joe",
//         address: "123 S St."
//     };
//     dbo.collection("customers").insertOne(customer, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// })

// Insert many
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('mydb');
    var customers = [{
            name: 'John',
            address: 'Highway 71'
        },
        {
            name: 'Peter',
            address: 'Lowstreet 4'
        },
        {
            name: 'Amy',
            address: 'Apple st 652'
        },
        {
            name: 'Hannah',
            address: 'Mountain 21'
        },
        {
            name: 'Michael',
            address: 'Valley 345'
        },
        {
            name: 'Sandy',
            address: 'Ocean blvd 2'
        },
        {
            name: 'Betty',
            address: 'Green Grass 1'
        },
        {
            name: 'Richard',
            address: 'Sky st 331'
        },
        {
            name: 'Susan',
            address: 'One way 98'
        },
        {
            name: 'Vicky',
            address: 'Yellow Garden 2'
        },
        {
            name: 'Georgie',
            address: 'Park Lane 38'
        },
        {
            name: 'Mike',
            address: 'Central st 954'
        },
        {
            name: 'Jake',
            address: 'Main Road 989'
        },
        {
            name: 'Alice',
            address: 'Sideway 1633'
        }
    ];
    dbo.collection("customers").insertMany(customers, function(err, res) {
        if (err) throw err;
        console.log(`Number of documents inserted: ${res.insertedCount}`);
        db.close();
    });
});