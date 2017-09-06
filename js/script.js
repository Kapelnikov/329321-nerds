var modalBtnOpen = document.querySelector('footer-btn');
var modalBtnClose = document.querySelector('.modal-close');
var modalModalPopup = document.querySelector('.write-us-form-wrapper');

modalBtnOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalModalPopup.classList.add("write-us-form-wrapper-show");
});

modalBtnClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalModalPopup.classList.remove("write-us-form-wrapper-show");
});
