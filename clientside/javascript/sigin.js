var siginForm = document.getElementById('login-form');
const url = siginForm.action;
const method = siginForm.method;
const emailError = document.getElementById('errorEmail');
const passwordError = document.getElementById('errorPassword');
siginForm.addEventListener('submit', (e) => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  console.log('Email',email,'PAssword',password);

  var formData = new FormData(siginForm);

  e.preventDefault();
  if (email === "") {
    emailError.innerHTML = 'Please Enter your Email';
  }
  else{
    emailError.innerHTML = '';
    
    if (password === "") {
      passwordError.innerHTML = 'Please Enter your Password';
    }
    else{
      console.log('A')
      passwordError.innerHTML = '';
      console.log('A')
  
      fetch(url, {
        method: "POST",
        body: new URLSearchParams(formData),
      }).
        then(res => {
          console.log(`Status Code:  ${res.status}`);
          console.log(`response:  ${res}`)
          if (res.status === 200) {
            window.location.assign("http://127.0.0.1:5500/clientside/html/home.html");
            console.log("succeeded")
          }
        })
        .catch(err => console.log(err));
    }
    
  }
   

})