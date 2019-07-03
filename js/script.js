var openBooking = document.querySelector(".open-booking");
var bookingForm = document.querySelector(".booking-form");

openBooking.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingForm.classList.add("booking-form-hide");
  checkin.focus();
});
