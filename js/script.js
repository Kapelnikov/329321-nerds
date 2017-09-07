var modalBtnOpen = document.querySelector('.footer-btn');
var modalBtnClose = document.querySelector('.modal-close');
var modalModalPopup = document.querySelector('.write-us-form-wrapper');
var modalFocus = modalModalPopup.querySelector('[name=name]');
var modalForm = modalModalPopup.querySelector("form");
var storage = localStorage.getItem("name");

modalBtnOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalModalPopup.classList.add("write-us-form-wrapper-show");
  modalFocus.focus();
});

modalBtnClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalModalPopup.classList.remove("write-us-form-wrapper-show");
  modalModalPopup.classList.remove("write-us-error");
});

modalForm.addEventListener("submit", function(evt) {
	if (!modalFocus.value) {
		evt.preventDefault();
		modalModalPopup.classList.add("write-us-error");
	} else {
		localStorage.setItem("name", modalFocus.value);
	}
	 
});