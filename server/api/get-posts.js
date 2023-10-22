import { MongoClient, ServerApiVersion } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    console.log("started");
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      // Specify the collection you want to access (replace 'your-collection' with the actual collection name)
      const dbName = "portfolio-blog";
      const collectionName = "posts";
      const collection = client.db(dbName).collection(collectionName);

      // Find the first document in the collection
      // Find all documents in the collection and convert them to an array
      const allDocuments = await collection.find({}).toArray();
      
      return allDocuments;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
});
