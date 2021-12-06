const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Swaraj:yvZGZwPpR7jfXFe8@cluster0.gvptg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log('Connected db');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No Database Found';
};

// export.mongoConnect = mongoConnect;
// export.getDb = getDb;

