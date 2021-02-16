const express = require('express')
const router = express.Router()

const Cars = require('./cars-model')

router.get('/', async (req, res) => {
	try {
		const carData = await Cars.get()
		res.status(200).json(carData)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.get('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const carData = await Cars.getByid(id)
		res.status(200).json(carData)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.post('/', async (req, res) => {
	const newCar = req.body
	try {
		const newCarData = await Cars.create(newCar)
		res.status(200).json(newCarData)
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = router
