## Part 2: Command Line Hotel Management System

To run this, [clone the repository](https://github.com/SalSoloman/phase-3-challenge-c)

Then `cd phase-3-challenge-c/part-2`

Run `npm install`

To test: `npm test`

To run development database: `npm run db` You also have the option to run `db:schema` and `db:migrate` on their own.

Make sure you have `postgres` running on your local machine before doing anything!

Node commands to run for command line printing:
`node ./hotel.js guests`
`node ./hotel.js rooms`
`node ./hotel.js rooms --available` to get only rooms that are available as of current date
`node ./hotel.js bookings`
`node ./hotel.js bookings 'room Number (example: 2A)'` to get upcoming bookings for a particular room

Here are the challenge directions below:

Build a command line tool that emulates a hotel management system for tracking room bookings. The tool will interact with a PostgreSQL database to store and retrieve information. You will have to design a database to store **guests**, **rooms**, and **bookings**. Let's call the database `hotel_db`.

You'll need to design the schema and write some SQL statements to insert data. Look closely at the commands and their sample outputs to determine how to design your schema.

Write a command line script called `hotel.js` that retrieves information from the database.

The `hotel.js` command should support the following sub commands:

| command  | description                                     | example usage                       |
|:---------|:------------------------------------------------|:------------------------------------|
| guests   | lists all guests                                | `node hotel.js guests`              |
| rooms    | lists rooms and current availability            | `node hotel.js rooms [--available]` |
| bookings | lists the room bookings (room # and guest name) | `node hotel.js bookings [<room #>]` |

### Example Usage

Note: The example output below is not exactly what you would see in reality. (Since the output would depend on the seed data that you add to your database) Use the output below as a template for how each command should display the data.

#### List all `guests`
```
$ node hotel.js guests
|----+------------------+---------------------------|
| ID | Guest Name       | Email                     |
|----+------------------+---------------------------|
|  1 | Scott Grigoryov  | sgrigoryov0@salon.com     |
|  2 | Jerrome Nickolls | jnickolls1@techcrunch.com |
|  3 | Renell Meek      | rmeek2@ucoz.com           |
|  4 | Emilio Heinle    | eheinle3@squarespace.com  |
|  5 | Holli Elliston   | helliston4@umich.edu      |
|  6 | Marcia Nelthropp | mnelthropp5@huffpo.com    |
|----+------------------+---------------------------|
```

#### List all rooms along with their capacity and current availability
```
$ node hotel.js rooms
|--------+----------+-----------|
| Room # | Capacity | Available |
|--------+----------+-----------|
| 2A     | 4        | true      |
| 2B     | 2        | true      |
| 3A     | 3        | false     |
| 3B     | 4        | false     |
| 4A     | 2        | true      |
|--------+----------+-----------|
```

#### List only available rooms with the `--available` option
```
$ node hotel.js rooms --available
|--------+----------+-----------|
| Room # | Capacity | Available |
|--------+----------+-----------|
| 2A     | 4        | true      |
| 2B     | 2        | true      |
| 4A     | 2        | true      |
|--------+----------+-----------|
```

#### List all upcoming room bookings (soonest check-in date first)
Note: _only_ show current and future bookings (i.e. the check out date is _after_ the current date). The examples below assume a current date of 2017-08-31, so your data will look different depending on when you use this command.

```
$ node hotel.js bookings
|--------+------------------+------------+------------|
| Room # | Guest Name       | Check-In   | Check Out  |
|--------+------------------+------------+------------|
| 3A     | Renell Meek      | 2017-08-20 | 2017-09-10 |
| 3B     | Holli Elliston   | 2017-08-30 | 2017-09-02 |
| 2A     | Marcia Nelthropp | 2017-09-03 | 2017-09-05 |
| 3B     | Emilio Heinle    | 2017-09-04 | 2017-09-10 |
| 4A     | Scott Grigoryov  | 2017-09-07 | 2017-09-09 |
|--------+------------------+------------+------------|
```

#### List room bookings for one room (soonest check-in date first)
Note: _only_ show current and future bookings (i.e. the check out date is _after_ the current date). The examples below assume a current date of 2017-08-31, so your data will look different depending on when you use this command.

```
$ node hotel.js bookings 3B
|--------+------------------+------------+------------|
| Room # | Guest Name       | Check-In   | Check Out  |
|--------+------------------+------------+------------|
| 3B     | Holli Elliston   | 2017-08-30 | 2017-09-02 |
| 3B     | Emilio Heinle    | 2017-09-04 | 2017-09-10 |
|--------+------------------+------------+------------|
```

### Requirements
- [x] __10:__ All files are stored under the `part-2/` folder
- [x] __10:__ Database schema (all `CREATE TABLE` statements) is defined in a file `schema.sql`
- [x] __10:__ SQL statements to insert seed data into all tables is added to the file `load-data.sql` (either create your own seed data or use the files provided: [rooms.csv][hotel-rooms] | [bookings.csv][hotel-bookings] | [guests.csv][hotel-guests])
- [x] __10:__ All database query functions are written in a file `database.js`, and tests for queries are written in a file `database_test.js`
- [x] __10:__ Tests can be run with the command `$ npm test`

User Stories: Ensure that your schema design can satisfy the following scenarios
- [x] __10__: As a hotel manager I can get a list of all guests
- [x] __10__: As a hotel manager I can get a list of all rooms
- [x] __10__: As a hotel manager I can see which rooms have been booked by which guests, along with their check-in and check out dates

Command line interface requirements
- [x] __10__: There is a Node script called `hotel.js` that can be called with different commands
- [x] __20__: Command `guests` has been implemented to the above specifications
- [x] __30__: Command `rooms` has been implemented to the above specifications
- [x] __30__: Command `bookings` has been implemented to the above specifications

Write tests with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) in `database_test.js` that assert:
- [x] __20__: The database function for the command `guests` is tested
- [x] __20__: The database function for the command `rooms` is tested
- [x] __20__: The database function for the command `bookings` is tested## Part 2: Command Line Hotel Management System

To run this, [clone the repository](https://github.com/pllearns/phase-3-challenge-c)

Then `cd phase-3-challenge-c/part-2`

Run `npm install`

To test: `npm test`

To run development database: `npm run db` You also have the option to run `db:schema` and `db:migrate` on their own.

Make sure you have `postgres` running on your local machine before doing anything!

Node commands to run for command line printing:
`node ./hotel.js guests`
`node ./hotel.js rooms`
`node ./hotel.js rooms --available` to get only rooms that are available as of current date
`node ./hotel.js bookings`
`node ./hotel.js bookings 'room Number (example: 2A)'` to get upcoming bookings for a particular room

Here are the challenge directions below:

Build a command line tool that emulates a hotel management system for tracking room bookings. The tool will interact with a PostgreSQL database to store and retrieve information. You will have to design a database to store **guests**, **rooms**, and **bookings**. Let's call the database `hotel_db`.

You'll need to design the schema and write some SQL statements to insert data. Look closely at the commands and their sample outputs to determine how to design your schema.

Write a command line script called `hotel.js` that retrieves information from the database.

The `hotel.js` command should support the following sub commands:

| command  | description                                     | example usage                       |
|:---------|:------------------------------------------------|:------------------------------------|
| guests   | lists all guests                                | `node hotel.js guests`              |
| rooms    | lists rooms and current availability            | `node hotel.js rooms [--available]` |
| bookings | lists the room bookings (room # and guest name) | `node hotel.js bookings [<room #>]` |

### Example Usage

Note: The example output below is not exactly what you would see in reality. (Since the output would depend on the seed data that you add to your database) Use the output below as a template for how each command should display the data.

#### List all `guests`
```
$ node hotel.js guests
|----+------------------+---------------------------|
| ID | Guest Name       | Email                     |
|----+------------------+---------------------------|
|  1 | Scott Grigoryov  | sgrigoryov0@salon.com     |
|  2 | Jerrome Nickolls | jnickolls1@techcrunch.com |
|  3 | Renell Meek      | rmeek2@ucoz.com           |
|  4 | Emilio Heinle    | eheinle3@squarespace.com  |
|  5 | Holli Elliston   | helliston4@umich.edu      |
|  6 | Marcia Nelthropp | mnelthropp5@huffpo.com    |
|----+------------------+---------------------------|
```

#### List all rooms along with their capacity and current availability
```
$ node hotel.js rooms
|--------+----------+-----------|
| Room # | Capacity | Available |
|--------+----------+-----------|
| 2A     | 4        | true      |
| 2B     | 2        | true      |
| 3A     | 3        | false     |
| 3B     | 4        | false     |
| 4A     | 2        | true      |
|--------+----------+-----------|
```

#### List only available rooms with the `--available` option
```
$ node hotel.js rooms --available
|--------+----------+-----------|
| Room # | Capacity | Available |
|--------+----------+-----------|
| 2A     | 4        | true      |
| 2B     | 2        | true      |
| 4A     | 2        | true      |
|--------+----------+-----------|
```

#### List all upcoming room bookings (soonest check-in date first)
Note: _only_ show current and future bookings (i.e. the check out date is _after_ the current date). The examples below assume a current date of 2017-08-31, so your data will look different depending on when you use this command.

```
$ node hotel.js bookings
|--------+------------------+------------+------------|
| Room # | Guest Name       | Check-In   | Check Out  |
|--------+------------------+------------+------------|
| 3A     | Renell Meek      | 2017-08-20 | 2017-09-10 |
| 3B     | Holli Elliston   | 2017-08-30 | 2017-09-02 |
| 2A     | Marcia Nelthropp | 2017-09-03 | 2017-09-05 |
| 3B     | Emilio Heinle    | 2017-09-04 | 2017-09-10 |
| 4A     | Scott Grigoryov  | 2017-09-07 | 2017-09-09 |
|--------+------------------+------------+------------|
```

#### List room bookings for one room (soonest check-in date first)
Note: _only_ show current and future bookings (i.e. the check out date is _after_ the current date). The examples below assume a current date of 2017-08-31, so your data will look different depending on when you use this command.

```
$ node hotel.js bookings 3B
|--------+------------------+------------+------------|
| Room # | Guest Name       | Check-In   | Check Out  |
|--------+------------------+------------+------------|
| 3B     | Holli Elliston   | 2017-08-30 | 2017-09-02 |
| 3B     | Emilio Heinle    | 2017-09-04 | 2017-09-10 |
|--------+------------------+------------+------------|
```

### Requirements
- [x] __10:__ All files are stored under the `part-2/` folder
- [x] __10:__ Database schema (all `CREATE TABLE` statements) is defined in a file `schema.sql`
- [x] __10:__ SQL statements to insert seed data into all tables is added to the file `load-data.sql` (either create your own seed data or use the files provided: [rooms.csv][hotel-rooms] | [bookings.csv][hotel-bookings] | [guests.csv][hotel-guests])
- [x] __10:__ All database query functions are written in a file `database.js`, and tests for queries are written in a file `database_test.js`
- [x] __10:__ Tests can be run with the command `$ npm test`

User Stories: Ensure that your schema design can satisfy the following scenarios
- [x] __10__: As a hotel manager I can get a list of all guests
- [x] __10__: As a hotel manager I can get a list of all rooms
- [x] __10__: As a hotel manager I can see which rooms have been booked by which guests, along with their check-in and check out dates

Command line interface requirements
- [x] __10__: There is a Node script called `hotel.js` that can be called with different commands
- [x] __20__: Command `guests` has been implemented to the above specifications
- [x] __30__: Command `rooms` has been implemented to the above specifications
- [x] __30__: Command `bookings` has been implemented to the above specifications

Write tests with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) in `database_test.js` that assert:
- [x] __20__: The database function for the command `guests` is tested
- [x] __20__: The database function for the command `rooms` is tested
- [x] __20__: The database function for the command `bookings` is tested
