const { MongoClient } = require("mongodb");

const DB_URL = "";
const DB_NAME = "";
const COLLECTION_NAME = "";

async function run() {
  try {
    const client = new MongoClient(DB_URL);
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    // const result = await collection.findOne({
    //   "key":"value"
    // });
    /* OR operation */
    // const result = await collection.find({
    //   $or: [{ status: 'A' }, { qty: { $lt: 30 } }]
    // });

    /* OR AND operation */
    // const result = await collection.find({
    //   status: 'A',
    //   $or: [{ qty: { $lt: 30 } }, { item: { $regex: '^p' } }]
    // });

    // const result = await collection.insertOne( {
  //   item: 'journal',
  //   qty: 25,
  //   size: { h: 14, w: 21, uom: 'cm' },
  //   status: 'A'
  // });
  // const result = await collection.insertMany([
    // {},{}
  // ]);
    // const result = await collection.updateOne({},{});

    /** Understanding updateOne and document reading */
    // await collection.updateOne(
    //   { _id: 1 },
    //   { $set: { value: 'new' } },
    //   { writeConcern: { w: 'majority' } }
    // );
    
    // // Now safely read
    // const result = await collection.findOne(
    //   { _id: 1 },
    //   { readConcern: { level: 'majority' } }
    // );
  } catch (err) {
    console.error(`An error has occured:: ${err}`);
  }
}

 

async function run() { 

  const client = new MongoClient(DB_URL);
  await client.connect(DB_NAME);   

  const db = client.db('test'); 
  const collection = db.collection('people'); 

  

  // Replace a document where name is "Alice" 

  const result = await collection.replaceOne( 

    { name: 'Alice' },  // filter 

    { name: 'Alice', age: 30, city: 'Toronto' } // replacement 

  ); 