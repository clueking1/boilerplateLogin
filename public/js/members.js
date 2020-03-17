const hello = document.querySelector('.name')

fetch('/api/user_data')
.then(response => response.json())
.then((data) => {
    console.log(data)
    hello.textContent = data.username
}).catch(err => {
    if (err) {
        throw err
    }
})