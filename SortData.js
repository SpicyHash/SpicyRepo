//sort data entries from database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");
    var sortList = {game: -1}; //-1 is alpha z-a 1 is alpha a-z

    dbObj.collection("games").find().sort(sortList).toArray((e,res) =>
    {
        if(e)throw e;
        console.log(res);
        db.close();
    });
    
})