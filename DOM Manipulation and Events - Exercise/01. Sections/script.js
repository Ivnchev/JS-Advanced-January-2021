function create(words) {
   let content = document.getElementById('content')
   words.map( x => {
      let divEl = document.createElement('div')
      let pEl = document.createElement('p')
      pEl.textContent = x
      pEl.style.display = 'none'
      divEl.appendChild(pEl)
      content.appendChild(divEl)
   })
   content.addEventListener('click', (e) => {
      if(e.target.tagName === 'DIV'){
      e.target.children[0].style.display = 'block'
      }
   })
}