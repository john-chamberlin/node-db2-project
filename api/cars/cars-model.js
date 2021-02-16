const db = require('../../data/dbconfig')

function get() {
	return db('cars')
}

function getByid(id) {
	return db('cars').where('id', id)
}

function create(car) {
	return db('cars')
		.insert(car)
		.then(([id]) => {
			return getByid(id)
		})
}

module.exports = {
	get,
	getByid,
	create
}
