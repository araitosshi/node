async function insertUser(name, db) {
    if (!name) {
      return { status: 400, body: 'Bad Request' };
    }
  
    if (typeof name !== 'string') {
      return { status: 400, body: 'Bad Request' };
    }
  
    await db.collection('user').insertOne({ name: name });
  
    return { status: 200, body: 'Created' };
  }
  exports.insertUser = insertUser;


  
