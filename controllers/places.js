const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        place: 'La Parguera',
        picture: 'https://unsplash.com/photos/wCtquP4WQ8U',
        country: 'United States',
        city: 'Lajas',
        state: 'Puerto Rico',
        date: 08/14/2022,
        musts: 'You have to go swimming in this beautiful water!'
    }, {
        place: 'The Oceanfront',
        picture: '',
        country: 'United States',
        city: 'Virginia Beach',
        state: 'Virginia',
        date: 06/18/2022,
        musts: 'Take pictures with the huge Neptune statue!'
    }]
    res.render('places/index', { places })
})

// let places = [{
//     place: 'La Parguera',
//     picture: '',
//     country: 'United States',
//     city: 'Lajas',
//     state: 'Puerto Rico',
//     date: 'August',
//     musts: 'You have to go swimming in this beautiful water!'
// }, {
//     place: 'The Oceanfront',
//     picture: '',
//     country: 'United States',
//     city: 'Virginia Beach',
//     state: 'Virginia',
//     date: 'June',
//     musts: 'Take pictures with the huge Neptune statue!'
// }]

module.exports = router
