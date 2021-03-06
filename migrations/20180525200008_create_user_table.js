exports.up = knex => {
  return knex.schema.createTable("users", t => {
    t.increments("userId").primary();
    t.string("username").notNullable();
    t.unique("username");
    t.timestamps(false, true);
    t.charset("utf8");
  });
};

exports.down = knex => {
  return Promise.all([
    knex.schema.dropTableIfExists("users"),
    knex.schema.dropTableIfExists("entries"),
  ]);
};
