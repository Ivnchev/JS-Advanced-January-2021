function validate() {
    let email = document.getElementById('email')
    email.addEventListener('change', (e) => {
        let r = /[a-z]+@[a-z]+.[a-z]+/g
        !r.test(e.target.value)
        ? e.target.classList.add('error')
        : e.target.classList.remove('error')
    })
}