exports.up = function(knex, Promise) {
  return knex.schema.table("tech", function(tbl) {
    tbl.text("info");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("tech", function(t) {
    t.dropColumn("info");
  });
};
