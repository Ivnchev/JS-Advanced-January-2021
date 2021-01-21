function solve() {
  let input = document.querySelector('#text').value
  let pascal = input.toLocaleLowerCase().split(' ')
    .filter(x => x !== '')
    .map(x => x[0].toLocaleUpperCase() + x.slice(1))
    .join('')
  let camel = input.toLocaleLowerCase().split(' ')
    .filter(x => x !== '')
    .map((x,i) => {
      if(i !== 0){
        return x[0].toLocaleUpperCase() + x.slice(1)
      }
      return x
    })
    .join('')
  let kind = document.querySelector('#naming-convention').value
  if(kind === "Camel Case" || kind === "Pascal Case"){
    document.querySelector('#result').textContent = kind === 'Pascal Case' ? pascal : camel
  } else {
    document.querySelector('#result').textContent = 'Error!'
  }
  
}