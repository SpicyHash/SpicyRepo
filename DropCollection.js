//sort data entries from database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");

    dbObj.dropCollection("games", function(e,delOK) 
    {
        if(e)throw e;
        if(delOK) console.log("Collection deleted");
        db.close();
    });
    
})