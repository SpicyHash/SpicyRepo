//sort data entries from database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");
	var queryEntry = {game:"VRChat", genre:"Da Way"};

    dbObj.collection("games").deleteOne(queryEntry, function(e,res) 
    {
        if(e)throw e;
        console.log("1 document deleted");
        db.close();
    });
    
})