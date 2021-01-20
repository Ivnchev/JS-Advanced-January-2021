function calc() {
    let data = document.querySelectorAll('#num1, #num2, #sum')
    data[2].value = Number(data[0].value) + Number(data[1].value)
}
