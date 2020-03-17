const hello = document.querySelector('.name')

fetch('/api/user_data', {
    method: "GET",

}).then((data) => {
    hello.textContent = data.username
}).catch(err => {
    if (err) {
        throw err
    }
})