exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert([
				{
					id: 1,
					vin: 12342212312,
					make: 'volkswagen',
					model: 'golf',
					mileage: 24000
				},
				{
					id: 2,
					vin: 12395212312,
					make: 'dodge',
					model: 'dart',
					mileage: 40000
				},
				{
					id: 3,
					vin: 9992212312,
					make: 'ford',
					model: 'focus',
					mileage: 10
				},
				{
					id: 4,
					vin: 1237523312,
					make: 'subaru',
					model: 'outback',
					mileage: 222200
				}
			])
		})
}
