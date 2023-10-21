const express = require('express')
const router = express.Router()
const userRoute = require('./user.route')

router.get('/ping', (req, res) => {
    res.json({
        "data": null,
        message: 'pong',
        "status": 200
    })
});

router.use('/user', userRoute)

module.exports = router