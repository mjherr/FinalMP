# TRAVEL LOG ¡HOLA!

¡Hola! is a travel log app where users can post to places they have been.

### Routes
| Method    |                      Path |                                          Purpose |
|-----------|---------------------------|--------------------------------------------------|
| GET       |                      /    |                                         Home page|
| GET       |               /places     |                                 Places index page|
| POST      |                 /places   |                                 Create new place |
| GET       | /places/new               | Form page for creating a new place               |
| GET       | /places/:id               | Details about a particular place                 |
| PUT       | /places/:id               | Update a particular place                        |
| GET       | /places/:id/edit          | Form page for editing an existing place          |
|DELETE     | /places/:id               | Delete a particular place                        |
| GET       | *                         | 404 page (matches any route not defined above)   |