```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{"counter":1}});
//Another Example
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{"quantity": 5}});
```