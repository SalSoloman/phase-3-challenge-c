\copy rooms(id, number, capacity) FROM './db/rooms.csv' DELIMITER ',' CSV HEADER;
\copy guests(id, name, email) FROM './db/guests.csv' DELIMITER ',' CSV HEADER;
\copy bookings(id, room_id, guest_id, check_in, check_out) FROM './db/bookings.csv' DELIMITER ',' CSV HEADER;
