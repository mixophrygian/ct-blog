exports.up = (knex, Promise) => {
  return knex.schema
    .createTable("entries", table => {
      table
        .integer("userId")
        .unsigned()
        .references("userId")
        .inTable("users");
      table.string("id", 191).notNullable();
      table.dateTime("date");
      table.text("situation");
      table.text("emotionalResponse");
      table.text("automaticThoughts");
      table.text("cognitiveDistortions");
      table.text("rationalResponse");
      table.timestamps(false, true);
      table.unique("id");
    })
    .then(data => Promise.resolve(data));
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("entries");
};
