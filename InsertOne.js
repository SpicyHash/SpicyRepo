//inserts entry in database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");

    var myDataObj = {game:"Rayman", genre:"Platformer"};

    /*dbObj.collection("games").insertMany(myDataObj, (e,res) =>
    {
         if(e)throw e;
         console.log("Number of entries: " + res.insertedCount);
         db.close();
     });*/
	 
    //inserts one
     dbObj.collection("games").insertOne(myDataObj, function(e,res) 
     {
         if(e)throw e;
         console.log("one entry recorded");
         db.close();
     });
    
})