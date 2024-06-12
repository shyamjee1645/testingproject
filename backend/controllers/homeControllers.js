const Home = require('../models/homeModel')

// Show Home Page
const showHomePage = (req, res) => {
    res.send("<h1>Home Page</h1>")
}

// Get all properties
const getAllHomes = async (req, res) => {
    try {
        const homes = await Home.find({})
        res.json(homes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get one property by ID
const getHomeById = async (req, res) => {
    const { id } = req.params
    try {
        const home = await Home.findById(id)
        if (home) {
            res.json(home)
        } else {
            res.status(404).json({ message: 'Property not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Create a new property
const createHome = async (req, res) => {
    const { address, price, bedrooms, bathrooms, sqft, builtYear, description } = req.body

    const newHome = new Home({
        address,
        price,
        bedrooms,
        bathrooms,
        sqft,
        builtYear,
        description
    })

    try {
        const savedHome = await newHome.save()
        res.status(201).json(savedHome)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update a property by ID
const updateHome = async (req, res) => {
    const { id } = req.params
    const { address, price, bedrooms, bathrooms, sqft, builtYear, description } = req.body

    try {
        const updatedHome = await Home.findByIdAndUpdate(
            id,
            { address, price, bedrooms, bathrooms, sqft, builtYear, description },
            { new: true }
        )
        if (updatedHome) {
            res.json(updatedHome)
        } else {
            res.status(404).json({ message: 'Property not found' })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete a property by ID
const deleteHome = async (req, res) => {
    const { id } = req.params

    try {
        const deletedHome = await Home.findByIdAndDelete(id)
        if (deletedHome) {
            res.json({ message: 'Property deleted successfully' })
        } else {
            res.status(404).json({ message: 'Property not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    showHomePage,
    getAllHomes,
    getHomeById,
    createHome,
    updateHome,
    deleteHome
}
