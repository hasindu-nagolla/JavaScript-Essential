// =============================================================================
// Enumerating properties means looping through all the properties of an object.
// =============================================================================

// Using for...in loop

let user = { userName: "hasii", userAge: 23, userLocation: "Sri Lanka" };

for(let key in user){
    console.log(key, ":", user[key]);
}