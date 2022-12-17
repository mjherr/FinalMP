import { useState } from "react"
import { useHistory } from "react-router-dom"

function NewPlaceForm() {

	const history = useHistory()

	const [place, setPlace] = useState({
		name: '',
		pic: '',
		city: '',
		state: '',
		cuisines: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/places`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(place)
		})

		history.push('/places')
	}

	return (
		<main>
			<h1>Add a Travel Log</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="place">Place Name</label>
					<input
						required
						value={place.name}
						onChange={e => setPlace({ ...place, name: e.target.value })}
						className="form-control"
						id="place"
						name="place"
					/>
				</div>
			<div className="form-group">
					<label htmlFor="pic">Post Picture</label>
					<input
						value={place.pic}
						onChange={e => setPlace({ ...place, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
                <div className="form-group">
					<label htmlFor="country">Country</label>
					<input
						value={place.country}
						onChange={e => setPlace({ ...place, country: e.target.value })}
						className="form-control"
						id="country"
						name="country"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<input
						value={place.city}
						onChange={e => setPlace({ ...place, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						value={place.state}
						onChange={e => setPlace({ ...place, state: e.target.value })}
						className="form-control"
						id="state"
						name="state"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="favorites">Favorites</label>
					<input
						value={place.favorites}
						onChange={e => setPlace({ ...place, favorites: e.target.value })}
						className="form-control"
						id="favorites" name="favorites" required />
				</div>
				<input className="btn btn-dark" type="submit" value="Add Place" />
			</form>
		</main>
	)
}

export default NewPlaceForm