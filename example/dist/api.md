# A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification
## Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.

*request usage*
```javascript
// Returns all pets from the system that the user has access to
Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.

Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.

let requestParams = {}
requestParams.tags = null // tags to filter by optional
requestParams.limit = null // maximum number of results to return optional
let res = await api.findPets(requestParams)
if (res) {
  // TODO:
}
```
*other usage*
```javascript
api.findPets_TYPE()
api.findPets_RAW_URL()
api.findPetsURL(requestParams)
```
## Creates a new pet in the store.  Duplicates are allowed
*request usage*
```javascript
// Creates a new pet in the store.  Duplicates are allowed
let requestParams = {}
requestParams.pet = null // Pet to add to the store required
let res = await api.addPet(requestParams)
if (res) {
  // TODO:
}
```
*other usage*
```javascript
api.addPet_TYPE()
api.addPet_RAW_URL()
api.addPetURL(requestParams)
```
## Returns a user based on a single ID, if the user does not have access to the pet
*request usage*
```javascript
// Returns a user based on a single ID, if the user does not have access to the pet
let requestParams = {}
requestParams.id = null // ID of pet to fetch required
let res = await api.find_pet_by_id(requestParams)
if (res) {
  // TODO:
}
```
*other usage*
```javascript
api.find_pet_by_id_TYPE()
api.find_pet_by_id_RAW_URL()
api.find_pet_by_idURL(requestParams)
```
## deletes a single pet based on the ID supplied
*request usage*
```javascript
// deletes a single pet based on the ID supplied
let requestParams = {}
requestParams.id = null // ID of pet to delete required
let res = await api.deletePet(requestParams)
if (res) {
  // TODO:
}
```
*other usage*
```javascript
api.deletePet_TYPE()
api.deletePet_RAW_URL()
api.deletePetURL(requestParams)
```
