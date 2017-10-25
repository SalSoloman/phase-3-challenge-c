DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  number VARCHAR(10),
  capacity INTEGER
);

DROP TABLE IF EXISTS guests;

CREATE TABLE guests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms,
  guest_id INTEGER REFERENCES guests,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL
); 
