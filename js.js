// Start Settings
let firstName = document.getElementById('first')
let email = document.getElementById('email')

firstName.oninput = show

function show() {
    email.value = this.value + "@gmail.com"
}
// End Settings
