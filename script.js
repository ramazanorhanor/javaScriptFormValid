const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = 'form-control is-invalid';
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = 'invalid-feedback'

}
function success(input) {
  input.className = 'form-control is-valid'

}
const validateEmailArrowFunc = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkEmail(email) {
  // return String(email)
  //   .toLowerCase()
  //   .match(
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  const regularExpressionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (regularExpressionEmail.test(email.value)) {
    success(email);
  } else {
    error(email, "hatalı mail formatı ")
  }

};
function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === '') {
      error(input, ` ${input.id} gerekli alan  yada zorunlu alan `)
    }
    else {
      success(input);
    }
  });
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input,`  ${input.id}  en az ${min} olmalı  `)
  }else if (input.value.length > max) {
    error(input,`  ${input.id} en çok ${max} olmalı  `)
  }else{
    success(input)
  }
}
function checkPasswords(input1,input2){
  if(input1.value !== input2.value){
    error(input2,'paralolar eşlemşmiyor ')
  }
}

function checkPhone(input){
  var exp=/^\d{10}$/;
  if(!exp.test(input.value))
error(input,'telefon numrası 10 karakter olacak karaktersizlik yapma ')
}

//console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //  if(username.value===''){
  //   error(username,"kullanıc adi gerekli");
  //  }else{
  //   success(username);
  //  }
  //  if(email.value===''){
  //   error(email,"email gerekli ");
  //  }else if(!validateEmail(email.value)){
  //     error(email,"düzgün geçerli bir mail adresi giriniz.");
  //  }
  //  else{
  //   success(email)
  //  }
  //  if(password.value===''){
  //   error(password," şifre gerekli");
  //  }else{
  //   success(password)
  //  }
  //  if(repassword.value===''){
  //   error(repassword,"şifre tekrarı gerekli");
  //  }else{
  //   success(repassword);
  //  }

  checkRequired([username, email, password, repassword,phone])
  checkEmail(email);
  checkLength(username, 7, 15);
  checkLength(password, 7, 12);
  checkPasswords(password,repassword);
  checkPhone(phone);
});