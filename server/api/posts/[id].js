
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const client = new MongoClient(process.env.DB, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    try {
      await client.connect();

      const dbName = "portfolio-blog";
      const collectionName = "posts";
      const collection = client.db(dbName).collection(collectionName);

      const specificDocumentId = getRouterParam(event, 'id');

      const specificDocument = await collection.findOne({
        _id: new ObjectId(specificDocumentId), // Ensure 'new' keyword is used here
      });

      if (!specificDocument) {
        return new Response("Not Found", { status: 404 });
      }

      return specificDocument;
    } finally {
      await client.close();
    }
  }
});

