const modal = document.querySelector('.booking-modal')
const roomModalInfo = document.querySelector('.booking-modal-content')
const roomModal = roomModalInfo.children

const roomNumber = roomModal[2].children[0]
const modalRate = roomModal[2].children[1]
const roomField = document.querySelector('tbody')

const roomTotal = roomModal[3]
const addNights = document.querySelector('.room-total')

const bookRoomBtn = document.querySelectorAll('.book-room')
const closeButton = document.querySelector('.close')

closeButton.addEventListener('click', () => {
  modal.classList.remove('show-modal')
})

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show-modal')
  }
})

roomField.addEventListener('click', (event) => {
  if (event.target.tagName == "BUTTON") {
  modalDetails(event.target)
  }
})

function modalDetails(roomInfo) {
  modal.classList.add('show-modal')

  let currentRoomInfo = roomInfo.parentElement.parentElement.children

  roomNumber.textContent = "Room Number: " + currentRoomInfo[0].textContent

  modalRate.textContent = currentRoomInfo[2].textContent + " / nightly"

  roomTotal.textContent = "Total " + currentRoomInfo[2].textContent

  addNights.addEventListener('click', () => {
    roomTotal.textContent = "Total $" + parseFloat(currentRoomInfo[2].textContent.replace("$", "")) * parseFloat(addNights.value)
    console.log(`What's my total cost?`, addNights.value)
  })
}

bookRoomBtn.forEach(element => element.addEventListener('click', modalDetails))
