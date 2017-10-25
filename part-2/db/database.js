const pgp = require('pg-promise')()
const config = require('./config')
const connection = config.dbConfig(process.env.NODE_ENV)
const db = pgp(connection)

const getAllGuests = () =>  db.any(`SELECT * FROM guests`)

const getAvailability = () => db.any(`
  SELECT rooms.number, rooms.capacity,
  CASE WHEN bookings.check_in < current_date AND current_date < bookings.check_out
  THEN FALSE
  ELSE TRUE
  END AS Available
  FROM bookings
  JOIN rooms
  ON rooms.id=bookings.room_id
;
`)

const getAvailableRoomsOnly = () => db.any(`
  SELECT * FROM (SELECT rooms.number, rooms.capacity,
  CASE WHEN bookings.check_in < current_date AND current_date < bookings.check_out
  THEN FALSE
  ELSE TRUE
  END AS Available
  FROM bookings
  JOIN rooms
  ON rooms.id=bookings.room_id) AS room
  WHERE room.available=true
;
`)

const getUpcomingRoomBookings = roomNum => {
  let sql = null
  if (roomNum) {
    sql = `SELECT
      rooms.number, guests.name, TO_CHAR(check_in, 'YYYY-MM-DD') AS check_in, TO_CHAR(check_out, 'YYYY-MM-DD') AS check_out
    FROM
      bookings
    JOIN
      rooms ON bookings.room_id=rooms.id
    JOIN
      guests ON bookings.guest_id=guests.id
    WHERE
      bookings.check_out > current_date
    AND
      rooms.number='${roomNum}'
    GROUP BY
      rooms.number, guests.name, bookings.check_in, bookings.check_out
    ORDER By
      check_in ASC
    ;
    `
  } else {
    sql = `SELECT
      rooms.number, guests.name, TO_CHAR(check_in, 'YYYY-MM-DD') AS check_in, TO_CHAR(check_out, 'YYYY-MM-DD') AS check_out
    FROM
      bookings
    JOIN
      rooms ON bookings.room_id=rooms.id
    JOIN
      guests ON bookings.guest_id=guests.id
    WHERE
      bookings.check_out > current_date
    GROUP BY
      rooms.number, guests.name, bookings.check_in, bookings.check_out
    ORDER By
      check_in ASC
    ;
    `
  }
  return Promise.resolve(
    db.any(sql).then(results => {
      const bookings = results.map(result => {
        return [result.number, result.name, result.check_in, result.check_out]
      })
      return bookings
    })
  )
}

module.exports = {
  getAllGuests,
  getAvailability,
  getAvailableRoomsOnly,
  getUpcomingRoomBookings
}
