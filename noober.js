// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Retrieve names from the API, store it in memory

  let passengerFirst = ride.passengerDetails.first 
  console.log(`First Name: ${passengerFirst}`)

  let passengerLast = ride.passengerDetails.last
  console.log(`Last Name: ${passengerLast}`)

  let passengerPhone = ride.passengerDetails.phoneNumber
  console.log(`Phone Number: ${passengerPhone}`)

  let numberOfPassengers = ride.numberOfPassengers
  console.log(`Number of Passengers: ${numberOfPassengers}`)

  let pickStreet = ride.pickupLocation.address
  console.log(`Pick-Up Address: ${pickStreet}`)

  let pickCity = ride.pickupLocation.city
  console.log(`Pick-Up City: ${pickCity}`)

  let pickState = ride.pickupLocation.state
  console.log(`Pick-Up State: ${pickState}`)

  let pickZip = ride.pickupLocation.zip
  console.log(`Pick-Up Zip: ${pickZip}`)

  let purpleRequested = ride.purpleRequested
  console.log(`Was Purple Requested? ${purpleRequested}`)

  let dropStreet = ride.dropoffLocation.address
  console.log(`Drop-Off Address: ${dropStreet}`)

  let dropCity = ride.dropoffLocation.city
  console.log(`Drop-Off City: ${dropCity}`)

  let dropState = ride.dropoffLocation.state
  console.log(`Drop-Off State: ${dropState}`)

  let dropZip = ride.dropoffLocation.zip
  console.log(`Drop-Off Zip: ${dropZip}`)

  // Determine what type of service the passenger requires.
  if (purpleRequested == true) {
    console.log (`Noober Purple Passenger: ${passengerFirst} ${passengerLast} - ${passengerPhone}. Pickup at ${pickStreet}, ${pickCity}, ${pickState} ${pickZip}. Drop-off at ${dropStreet}, ${dropCity}, ${dropState} ${dropZip}.`)
  } else if (numberOfPassengers > 3) {
    console.log (`Noober XL Passenger: ${passengerFirst} ${passengerLast} - ${passengerPhone}. Pickup at ${pickStreet}, ${pickCity}, ${pickState} ${pickZip}. Drop-off at ${dropStreet}, ${dropCity}, ${dropState} ${dropZip}.`)
  } else {
    console.log (`Noober X Passenger: ${passengerFirst} ${passengerLast} - ${passengerPhone}. Pickup at ${pickStreet}, ${pickCity}, ${pickState} ${pickZip}. Drop-off at ${dropStreet}, ${dropCity}, ${dropState} ${dropZip}.`)
  }

  // 🔥 YOUR CODE ENDS HERE 🔥
})


  