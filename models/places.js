const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    place: {type: String, required: true },
    pic: String,
    country: {type: String, required: true },
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'United States'},
    favorite: {type: String}
})

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     place: 'La Parguera',
//     picture: '/images/beautiful-water-islands.jpg',
//     country: 'United States',
//     city: 'Lajas',
//     state: 'Puerto Rico',
//     musts: 'You have to go swimming in this beautiful water!'
// }, {
//     place: 'The Oceanfront',
//     picture: '/images/thinking-statue.jpg',
//     country: 'United States',
//     city: 'Virginia Beach',
//     state: 'Virginia',
//     musts: 'Take pictures with the huge Neptune statue!'
// }]