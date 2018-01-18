//finds entry in database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");

    dbObj.collection("games").find({}).toArray((e,res) =>
    {
        if(e)throw e;
        console.log(res);
        db.close();
    });

    // find one data
    // dbObj.collection("games").findOne({}, (e,res) =>
    // {
    //     if(e)throw e;
    //     console.log(res);
    //     db.close();
    // });
    
})