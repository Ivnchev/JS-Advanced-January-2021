function validate() {
    let email = document.getElementById('email')
    email.addEventListener('change', (e) => {
        let r = /[a-z]+@[a-z]+.[a-z]+/g
        if(!r.test(e.target.value)){
            e.target.classList.add('error')
        } else {
            e.target.classList.remove('error')
        }
    })
}