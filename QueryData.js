//Queries data entries in db
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");
    var query = {genre:"FPS/Arena"};

    dbObj.collection("games").find(query).toArray((e,res) =>
    {
        if(e)throw e;
        console.log(res);
        db.close();
    });
    
})