## Incorrect Usage of MongoDB's $inc Operator
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.

**The Problem:**
The `$inc` operator is used to increment a numeric field in a document.  A common mistake is omitting the quotes around the field name within the `$inc` object.

**The Solution:**
Ensure that the field name to be incremented is enclosed in quotes within the `$inc` operator to avoid errors.

**Example:**
Incorrect:
```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
```
Correct:
```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{"counter":1}});
```