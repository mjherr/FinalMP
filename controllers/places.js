const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        place: 'La Parguera',
        picture: '/images/beautiful-water-islands.jpg',
        country: 'United States',
        city: 'Lajas',
        state: 'Puerto Rico',
        date: 08/14/2022,
        musts: 'You have to go swimming in this beautiful water!'
    }, {
        place: 'The Oceanfront',
        picture: '/images/thinking-statue.jpg',
        country: 'United States',
        city: 'Virginia Beach',
        state: 'Virginia',
        date: 06/18/2022,
        musts: 'Take pictures with the huge Neptune statue!'
    }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })

//New
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST/places')
})

  
module.exports = router
