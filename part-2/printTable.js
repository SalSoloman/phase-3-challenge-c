const printGuests = (result) => {
  console.log(`|------+------------------------+----------------------------------|`)
  console.log(`| ID   |  Guest Name            | Email                            |`)
  console.log(`|------+------------------------+----------------------------------|`)
  printFormatGuests(result)
}

const printRoomsWithCapacityAndAvailability = (result) => {
  console.log(`|----------+----------+-----------+`)
  console.log(`| Room #   | Capacity | Available |`)
  console.log(`|----------+----------+-----------+`)
  printFormatRooms(result)
}

const printAllUpcomingRoomBookings = (result) => {
  console.log(`|--------+----------------------+----------------+----------------|`)
  console.log(`|Room #  |Guest Name            | Check-In       | Check Out      |`)
  console.log(`|--------+----------------------+----------------+----------------|`)
  printFormatBookings(result)
}

const printFormatGuests= (result) => {
  result.forEach((column) => {
    let firstArg = String(Object.values(column)[0])
    let secondArg = String(Object.values(column)[1])
    let thirdArg = String(Object.values(column)[2])
    let numSpacesAddFirstArg = Math.max(4 - firstArg.length)
    let numSpacesAddSecondArg = Math.max(22 - secondArg.length)
    let numSpacesAddThirdArg = Math.max(32 - thirdArg.length)
    console.log(`| ${firstArg} ${Array(numSpacesAddFirstArg).join(" ")} |  ${secondArg} ${Array(numSpacesAddSecondArg).join(" ")}| ${thirdArg} ${Array(numSpacesAddThirdArg).join(" ")} |`)
  })
  console.log(`|------+------------------------+----------------------------------|`)
}

const printFormatRooms= (result) => {
  result.forEach((column) => {
    let firstArg = String(Object.values(column)[0])
    let secondArg = String(Object.values(column)[1])
    let thirdArg = String(Object.values(column)[2])
    let numSpacesAddFirstArg = Math.max(4 - firstArg.length)
    let numSpacesAddSecondArg = Math.max(4 - secondArg.length)
    let numSpacesAddThirdArg = Math.max(6 - thirdArg.length)
    console.log(`| ${firstArg} ${Array(numSpacesAddFirstArg).join(" ")}     |  ${secondArg} ${Array(numSpacesAddSecondArg).join(" ")}    | ${thirdArg} ${Array(numSpacesAddThirdArg).join(" ")}    |`)
  })
  console.log(`|------------------+--------------|`)
}

const printFormatBookings = (result) => {
  result.forEach((column) => {
    let firstArg = String(Object.values(column)[0])
    let secondArg = String(Object.values(column)[1])
    let thirdArg = String(Object.values(column)[2])
    let fourthArg = String(Object.values(column)[3])
    let numSpacesAddFirstArg = Math.max(4 - firstArg.length)
    let numSpacesAddSecondArg = Math.max(21 - secondArg.length)
    let numSpacesAddThirdArg = Math.max(15 - thirdArg.length)
    let numSpacesAddFourthArg = Math.max(15 - fourthArg.length)
    console.log(`| ${firstArg} ${Array(numSpacesAddFirstArg).join(" ")}   | ${secondArg} ${Array(numSpacesAddSecondArg).join(" ")}| ${thirdArg} ${Array(numSpacesAddThirdArg).join(" ")}| ${fourthArg} ${Array(numSpacesAddFourthArg).join(" ")}|`)
  })
  console.log(`|--------+----------------------+----------------+----------------|`)
}

module.exports = {
  printGuests,
  printRoomsWithCapacityAndAvailability,
  printAllUpcomingRoomBookings
}
