function showCollections() {

  const MongoClient = require("mongodb").MongoClient;

  const MONGODB_URI = process.env.MONGODB_URI;
  const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });

  const dbName = "eyemed";

  client

    .connect()

    .then(
      client =>
        client
          .db(dbName)
          .listCollections()
          .toArray() // Returns a promise that will resolve to the list of the collections
    )

    .then(cols => cols.map(col => { console.log(col.name) }))

    .finally(() => client.close());
}

module.exports = { showCollections };