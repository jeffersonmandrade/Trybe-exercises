const connection = require("./connections");
const { ObjectId } = require('mongodb')

const insertUser = async (firstName, lastName, email, password) => {
  const create = await connection().then((db) =>
    db.collection("user").insertOne({ firstName, lastName, email, password })
  ).then((result) => ({ id: result.insertedId, firstName, lastName, email }));
  return create
};
const getAll = async () => {
  const result = await connection().then((db) => db.collection("user").find().toArray()).then(cadastro =>
    cadastro.map(({_id,firstName, lastName, email}) =>({
      id: _id,
      firstName,
      lastName,
      email
    })))
  if(result.length === 0){
    return []
  }
  return result
}

const getUserId = async (id) => {
  const result = await connection().then((db) => db.collection("user").find({_id: ObjectId(Number(id))}) )
}

module.exports = { insertUser, getAll};
