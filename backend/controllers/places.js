const router = require('express').Router()
const db = require('../models')


router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.get('/places', (req, res) => {
    res.render('places/new')
  })

//New
router.post('/', (req, res) => {
    if (req.body.pic === '') { req.body.pic = undefined }
    if (req.body.city === '') { req.body.city = undefined }
    if (req.body.state === '') { req.body.state = undefined }
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`
                }
                res.render('places/new', { message })
            }
            else {
                res.render('error404')
            }
        })
})

//Show
router.get('/:id', (req, res) => {
    db.Place.findOne({ _id: req.params.id })
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//Delete
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
    
module.exports = router