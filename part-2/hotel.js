const {
  getAllGuests,
  getAvailability,
  getAvailableRoomsOnly,
  getUpcomingRoomBookings } = require('./db/database.js')
const {
  printGuests,
  printRoomsWithCapacityAndAvailability,
  printAllUpcomingRoomBookings } = require('./printTable')

const command = process.argv[2]
const commandInput = process.argv[3]

switch (command) {
  case 'guests':
    getAllGuests(commandInput)
      .then(results => {
        printGuests(results)
        process.exit(0)
      })
    break
  case 'rooms':
  if (commandInput === '--available') {
    getAvailableRoomsOnly(commandInput)
      .then(results => {
        printRoomsWithCapacityAndAvailability(results)
        process.exit(0)
      })
    } else {
      getAvailability(commandInput)
        .then(results => {
          printRoomsWithCapacityAndAvailability(results)
          process.exit(0)
        })
    }
    break
  case 'bookings':
    getUpcomingRoomBookings(commandInput)
      .then(results => {
        printAllUpcomingRoomBookings(results)
        process.exit(0)
      })
    break
  default:
    console.log('Please enter a valid command')
}
