exports.up = function (knex) {
	return knex.schema.createTable('cars', table => {
		table.increments()
		table.bigInteger('vin').unique().notNullable()
		table.text('make').notNullable()
		table.text('model').notNullable()
		table.integer('mileage').notNullable()
		table.text('transmissionType')
		table.text('titleStatus')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('cars')
}
