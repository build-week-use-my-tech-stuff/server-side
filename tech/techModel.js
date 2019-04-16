const db = require("../database/dbConfig");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("tech");
}

function getById(id) {
  return db("tech")
    .where({ id })
    .first();
}

function insert(tech) {
  return db("tech")
    .insert(tech)
    .returning("id")
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("tech")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("tech")
    .where("id", id)
    .del();
}
