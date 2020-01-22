
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    //   table.integer("id").notNull().unique().primary()
    table.increments("id")
    table.text("carMake").notNull()
    table.text("carModel").notNull()
    table.text("color").notNull()
    table.integer("carYear").notNull()
    table.text("VIN").notNull().unique()
    table.text("transmissionType")
    // table.boolean("isSold").defaultTo(false)
  })
};


//to reverse the up function: rollback
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
