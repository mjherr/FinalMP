const db = require('../models')

db.Place.create ([{
        place: 'La Parguera',
        picture: '/images/beautiful-water-islands.jpg',
        country: 'United States',
        city: 'Lajas',
        state: 'Puerto Rico',
        musts: 'You have to go swimming in this beautiful water!'
    }, {
        place: 'The Oceanfront',
        picture: '/images/thinking-statue.jpg',
        country: 'United States',
        city: 'Virginia Beach',
        state: 'Virginia',
        musts: 'Take pictures with the huge Neptune statue!'
    }])
    .then(() => {
        console.log('Yes! Success!')
        process.exit()
    })
    .catch(err =>{
        console.log('You failed miserably!', err)
        process.exit()
    })