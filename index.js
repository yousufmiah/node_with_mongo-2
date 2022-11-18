const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const URL =
  "mongodb+srv://yousuf:C8Mld6Iv7biUGxMh@cluster0.oj26mwr.mongodb.net?retryWrites=true&w=majority";

const config = { useUnifiedTopology: true };

/*   
const client = new MongoClient(URL);

client.connect(function (error) {
  if (error) {
    console.log("connection failed");
  } else {
    console.log("connection success");
  }
});
 */
//or another connection system

// myMongoClient এই পেরামিটার দি েয় ডাটাবেইজে একসেস করবো, ডাটাবেইজের কালেকশনে একসেস করবো, ডাটা ইনসার্ট, আপডেট করবো।

MongoClient.connect(URL, config, function (error, myMongoClient) {
  if (error) {
    console.log("connection failed");
  } else {
    console.log("connection success"); // connection hole data insert hobe
    // insertData(myMongoClient); //inserdata execute korar jonno
    // deleteOneItem(myMongoClient); // deletedata execute korar jonno
    // deleteAllItems(myMongoClient);
    // findOneWithoutCondition(myMongoClient);
    // findOneWithCondition(myMongoClient);
    // findAllData(myMongoClient);
    // findAllDataByProjection(myMongoClient);
    // findAllDataByQuery(myMongoClient);
    // findAllDataByLimit(myMongoClient);
    findAllDataBySort(myMongoClient);
  }
});

//-----------
//-----------
//insert onedata
function insertData(myMongoClient) {
  //school holo database er nam
  const myDataBase = myMongoClient.db("school");

  //jeheto mongodb tai data hobe json formate
  const myData = { name: "Yousuf", age: "25", roll: "01", city: "Dhaka" };

  //student holo collection er nam
  const myCollection = myDataBase.collection("students");

  //insert korte
  myCollection.insertOne(myData, function (error) {
    if (error) {
      console.log("data insert failed");
    } else {
      console.log("data insert success");
    }
  });
}

//----------
//----------
//deleteOne data
function deleteOneItem(myMongoClient) {
  //database
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  const deleteItem = { roll: "02" };

  //delete korte
  myCollection.deleteOne(deleteItem, function (error) {
    if (error) {
      console.log("data delete failed");
    } else {
      console.log("data delete success");
    }
  });
}

//-----------
//-----------
//deleteAll data
function deleteAllItems(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  //delete many item
  myCollection.deleteMany(function (error, resultObj) {
    if (error) {
      console.log("delete failed");
    } else {
      console.log(resultObj);
    }
  });
}

//---------
//---------
//findOne() কন্ডিশন না দিলে, কালেশন থেকে প্রথম ডাটা পাবে, কন্ডিশন দিলে কন্ডিশন অনুসারে পাবে
function findOneWithoutCondition(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  const findObj = {}; //without condition tai

  myCollection.findOne(findObj, function (error, result) {
    console.log(result);
  });
}

//--------
//--------
//findOne()
function findOneWithCondition(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  const findObj = { roll: "05" }; //without condition tai

  myCollection.findOne(findObj, function (error, result) {
    console.log(result);
  });
}

//-----
//-----
//find() // mane find all data
function findAllData(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  myCollection.find().toArray(function (error, result) {
    console.log(result);
  });
}

//---------
//---------
//find by projection এর মাধ্যমে কলাম আকারে ডাটা সিলেক্ট করা যায়
function findAllDataByProjection(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  let itemObj = {};
  let itemProjection = { projection: { roll: "1" } };

  myCollection.find(itemObj, itemProjection).toArray(function (error, result) {
    console.log(result);
  });
}

//---------
//---------
//find by query এর মাধ্যমে কলাম আকারে ডাটা সিলেক্ট করা যায়
function findAllDataByQuery(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  let Query = { city: "Dhaka" };

  myCollection.find(Query).toArray(function (error, result) {
    console.log(result);
  });
}

//---------
//---------
//find by limit এর মাধ্যমে limit আকারে ডাটা সিলেক্ট করা যায়
function findAllDataByLimit(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  myCollection
    .find()
    .limit(3)
    .toArray(function (error, result) {
      console.log(result);
    });
}

//---------
//---------
//find by sort এর মাধ্যমে ascending, descending আকারে ডাটা সিলেক্ট করা যায়
// 1 mane choto theke boro, -1 mane boro theke choto
function findAllDataBySort(myMongoClient) {
  //data base
  const myDataBase = myMongoClient.db("school");

  //collection
  const myCollection = myDataBase.collection("students");

  // const sortPattern = { roll: -1 };
  const sortPattern = { class: -1 };

  myCollection
    .find()
    .sort(sortPattern)
    .toArray(function (error, result) {
      console.log(result);
    });
}
