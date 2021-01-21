function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    btn.innerHTML === 'More' ? btn.innerHTML = 'Less' : btn.innerHTML = 'More';
    let paragraph = document.getElementById('extra');
    paragraph.style.display = 'none';
    if(btn.innerHTML === 'Less'){
        if(paragraph.style.display === 'none'){
            paragraph.style.display = 'block';
        }
    } else {
        paragraph.style.display = 'none';
    }
}