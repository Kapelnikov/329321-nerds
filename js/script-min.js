var modalBtnOpen=document.querySelector(".footer-btn"),modalBtnClose=document.querySelector(".modal-close"),modalModalPopup=document.querySelector(".write-us-form-wrapper"),modalFocus=modalModalPopup.querySelector("[name=name]"),modalForm=modalModalPopup.querySelector("form"),storage=localStorage.getItem("name");modalBtnOpen.addEventListener("click",function(o){o.preventDefault(),modalModalPopup.classList.add("write-us-form-wrapper-show"),modalFocus.focus()}),modalBtnClose.addEventListener("click",function(o){o.preventDefault(),modalModalPopup.classList.remove("write-us-form-wrapper-show"),modalModalPopup.classList.remove("write-us-error")}),modalForm.addEventListener("submit",function(o){modalFocus.value?localStorage.setItem("name",modalFocus.value):(o.preventDefault(),modalModalPopup.classList.add("write-us-error"))});