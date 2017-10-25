const expect = require('chai').expect

const {getAllGuests, getAvailableRooms, getUpcomingRoomBookings} = require('../db/database.js')

describe('getAllGuests', () => {
  it('should return all guests in hotel', () => {
    return getAllGuests().then(results => {
      const guestIds = results.map(result => result.id)
      const guestNames = results.map(result => result.name)
      const guestEmails = results.map(result => result.email)
      expect(guestIds[0]).to.eq(1)
      expect(guestNames[0]).to.eq('Aurthur Velti')
      expect(guestNames[1]).to.eq('Kurtis Pougher')
      expect(guestEmails[0]).to.eq('avelti0@live.com')
    })
  })
})

describe('getAvailableRooms', () => {
  it('should return all of the available rooms', () => {
    return getAvailableRooms().then(results => {
      const roomNumber = results.map(result => result.number)
      const roomCapacity = results.map(result => result.capacity)
      const roomAvailability = results.map(result => result.available)
      expect(roomNumber[0]).to.eq('3B')
      expect(roomNumber[1]).to.eq('3C')
      expect(roomCapacity[0]).to.eq(4)
      expect(roomAvailability[0]).to.be.eq(true)
      expect(roomAvailability[2]).to.be.eq(false)
    })
  })
})

describe('getUpcomingRoomBookings', () => {
  it('should return all of the available rooms', () => {
    return getUpcomingRoomBookings().then(results => {
      const roomNumber = results.map(result => result.number)
      const guestName = results.map(result => result.name)
      const checkIn = results.map(result => result.check_in)
      const checkOut = results.map(result => result.check_out)
      expect(roomNumber[6]).to.eq('2A')
      expect(guestName[6]).to.eq('Charlton Millson')
      expect(checkIn[6]).to.eq('2017-08-18')
      expect(checkOut[6]).to.eq('2017-08-28')
    })
  })
})
