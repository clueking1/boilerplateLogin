const loginForm = document.querySelector('.login')
const emailInput = document.querySelector('#inputEmail')
const passwordInput = document.querySelector('#inputPassword')
const errorTxt = document.querySelector('.errText')

loginForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const userData = {
        email: emailInput.value,
        password: passwordInput.value
    }
    if(!userData.email || !userData.password) {
        return
    }
    loginUser(userData.email, userData.password)
     emailInput.value = ""
    passwordInput.value = ""
})

function loginUser(username, password) {
     fetch('/api/login', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(() => {
        window.location.replace('/members')
    }).catch(err => {
        if (err) {
            errorTxt.textContent = "Username or Password is invalid."
        }
    })
}


