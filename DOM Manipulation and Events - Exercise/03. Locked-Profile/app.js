function lockedProfile() {
    [...document.querySelectorAll('.profile')].map( x => {
        let btn = x.querySelector('button')
        btn.addEventListener('click', () => {
            let locked = x.querySelector('input').checked
            let hiddenDiv = x.querySelector('div')
            if(!locked){
                if(btn.textContent === 'Show more'){
                    hiddenDiv.style.display = 'block'
                    btn.textContent = 'Hide it'
                } else if( btn.textContent === 'Hide it'){
                    hiddenDiv.style.display = 'none'
                    btn.textContent = 'Show more'
                }
            }
        })
    }) 
}