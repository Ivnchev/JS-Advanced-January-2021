function attachGradientEvents() {
    let box = document.getElementById('gradient')
    box.addEventListener('mousemove', e => {
        let result = `${Math.floor((e.offsetX / e.target.clientWidth) * 100)}%`
        document.getElementById('result').innerText = result
    })
}