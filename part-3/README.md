## Part 3: Web interface for hotel manager

To play: simply [clone the repository](https://github.com/SalSoloman/phase-3-challenge-c)

`cd phase-3-challenge-c/part-3`

`open hotel.html`

Play with the DOM!


Create a front-end only site for a hotel manager where guests can choose from a list of rooms to book.

You only need to write HTML, CSS, and JavaScript. No web server is required.

The initial layout has already been provided for you in the [hotel.html][hotel-html] and [styles.css][hotel-css] files. From this base, build the modal and add interactive behavior with JS.

Note: the "Confirm" button in the modal doesn't need to do anything. Just leave it as a placeholder button.

### Wireframe

Clicking on the "Book" button for any room opens the "Booking" modal.

![modal](https://user-images.githubusercontent.com/709100/29230971-4ed7acc6-7eb3-11e7-9266-d40be6afe004.png)

### Requirements

- [x] __10:__ All files are stored under the `part-3/` folder
- [x] __20:__ No third party CSS or JS libraries are used (all code must be written from scratch)
- [x] __10:__ HTML, CSS, and JS are separated into their own files.
- [x] __20:__ Clicking on the "Book" button for a room will open the "Booking" modal with the room info automatically inserted (room number and nightly rate)
- [x] __20:__ Users can select a check-in date (using an HTML5 date input) and a number of nights
- [x] __20:__ The "Total" in the "Booking" modal shows the total sum (formula: nightly rate multiplied by number of nights)
- [x] __20:__ Whenever the number of nights changes, the total is updated automatically
- [x] __20:__ Clicking on the "X" button in the "Booking" modal closes the modal
