var signupForm = document.getElementById('signup-form');
    const url = signupForm.action;
    const method = signupForm.method;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    signupForm.addEventListener('submit',(e)=>{

      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      console.log('Email',email,'PAssword',password);
    
      var formData = new FormData(signupForm);
    
      e.preventDefault();
      if (email === "") {
        emailError.innerHTML = 'Please Enter your Email';
      }
      else{
        emailError.innerHTML = '';
        
        if (password === "") {
          passwordError.innerHTML = 'Please Enter your Password';
        }
        else if (password.length >=6) {
          
          passwordError.innerHTML = '';
        
    fetch(url, {
        method: "POST",
        body: new URLSearchParams(formData),
        }).
		then(res => {
		console.log(`Status Code:  ${res.status}`);
    console.log(`response:  ${res}`)
    if(res.status===200){
      window.location.assign("http://127.0.0.1:5500/clientside/html/signin.html");
      console.log("succeeded")
    }
    
		})
		.catch(err => console.log(err));
  }
}

  })