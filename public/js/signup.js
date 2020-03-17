const loginForm = document.querySelector('.login')

loginForm.addEventListener('submit', function(e) {

    const emailInput = document.querySelector('#email-input').value
    const userInput = document.querySelector('#username-input').value
    const passwordInput = document.querySelector('#password-input').value
    const passwordConInput = document.querySelector('#passwordCon-input').value

    fetch('/user', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: emailInput,
            username: userInput,
            password: passwordInput,
            passwordCon: passwordConInput
        })
    }).then(() => {
        window.location.replace('/')
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})