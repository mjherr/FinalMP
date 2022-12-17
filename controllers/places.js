const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    // let places = [{
    //     place: 'La Parguera',
    //     picture: '/images/beautiful-water-islands.jpg',
    //     country: 'United States',
    //     city: 'Lajas',
    //     state: 'Puerto Rico',
    //     date: 08/14/2022,
    //     musts: 'You have to go swimming in this beautiful water!'
    // }, {
    //     place: 'The Oceanfront',
    //     picture: '/images/thinking-statue.jpg',
    //     country: 'United States',
    //     city: 'Virginia Beach',
    //     state: 'Virginia',
    //     date: 06/18/2022,
    //     musts: 'Take pictures with the huge Neptune statue!'
    // }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })

//New
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        //Default image if none provided
        req.body.pic = 'https://unsplash.com/photos/bal4ODerCeg'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('POST/places')
})

//Show
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id] })
    }
  })
  
  
module.exports = router
