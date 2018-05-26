exports.up = knex => {
  return knex.schema.createTable("user", t => {
    t.increments("id").primary();
    t.string("username").notNullable();
    t.string("password").notNullable();
    t.json("entries");
    t.timestamps(false, true);
    t.unique("username");
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("user");
};
