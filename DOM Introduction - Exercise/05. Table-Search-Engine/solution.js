function solve() {
   let searchField = document.querySelector('#searchField')
   let btn = document.querySelector('#searchBtn')
   let data = document.querySelectorAll("tbody > tr")
   btn.addEventListener('click' , () => {
      [...data].map( x=> {
         x.textContent.includes(searchField.value)
         ? x.setAttribute('class', 'select')
         : x.removeAttribute('class')
      })
      searchField.value = ''
   })
}