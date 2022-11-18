//*****file run korte hole file tike index.js banate hobe
const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const URL =
  "mongodb+srv://yousuf:C8Mld6Iv7biUGxMh@cluster0.oj26mwr.mongodb.net?retryWrites=true&w=majority";

const config = { useUnifiedTopology: true };

// myMongoClient এই পেরামিটার দি েয় ডাটাবেইজে একসেস করবো, ডাটাবেইজের কালেকশনে একসেস করবো, ডাটা ইনসার্ট, আপডেট করবো।

MongoClient.connect(URL, config, function (error, myMongoClient) {
  if (error) {
    console.log("connection failed");
  } else {
    console.log("connection success"); // connection hole data insert hobe
    // insertData(myMongoClient); //inserdata execute korar jonno
    // deleteOneItem(myMongoClient); // deletedata execute korar jonno
    // deleteAllItems(myMongoClient);
    findOneWithoutCondition(myMongoClient);
    // findOneWithCondition(myMongoClient);
    // findAllData(myMongoClient);
    // findAllDataByProjection(myMongoClient);
    // findAllDataByQuery(myMongoClient);
    // findAllDataByLimit(myMongoClient);
    // findAllDataBySort(myMongoClient);
  }
});

//---------
//---------
//findOne() without condition কন্ডিশন না দিলে, কালেশন থেকে প্রথম ডাটা পাবে, কন্ডিশন দিলে কন্ডিশন অনুসারে পাবে
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
