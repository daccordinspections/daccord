function showCollections() {
  const MongoClient = require("mongodb").MongoClient;

  // Replace the connection string below with your actual MongoDB connection string
  const MONGODB_URI = process.env.MONGODB_URI;

  const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });

  client.connect()
    .then(() => {
      const dbName = process.env.DBNAME; // Replace this with the actual database name
      return client.db(dbName).listCollections().toArray();
    })
    .then(cols => cols.map(col => { console.log(col.name) }))
    .catch(err => console.error("Error fetching collections:", err))
    .finally(() => client.close());
}

module.exports = { showCollections };
