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
});

modalForm.addEventListener("submit", function(evt) {
	if (!modalFocus.value) {
		evt.preventDefault();
		document.write("Введите пжста имя");
	} else {
		localStorage.setItem("name", modalFocus.value);
	}
	 
});