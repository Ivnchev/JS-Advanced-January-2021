function search() {
   let input = document.querySelector('#searchText')
   let data = Array.from( document.querySelector('#towns').children )
   let result = document.querySelector('#result')
   let count = 0;
   data.map( x => {
      if(x.textContent.match(input.value)){
         count++
         x.style.fontWeight = 'bold'
         x.style.textDecoration = 'underline'
      }
   })
   result.textContent = `${count} matches found`
}
