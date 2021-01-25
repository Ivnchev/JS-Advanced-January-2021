function solve() {
  let rigthAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
  let sections = document.getElementsByTagName('section')
  let correct = 0;
  let i = 0;

  Array.from(document.querySelectorAll('.answer-text'))
    .map( x => x.addEventListener('click', (e) => {
      if(rigthAnswers.includes(e.target.textContent)){ 
        correct++ }
        
        sections[i].style.display = 'none'

      if(sections[i + 1] !== undefined){
        sections[i+1].style.display = 'block'
        i++;
      } else {
        document.querySelector('#results').style.display = 'block';
        correct !== 3 
        ? document.querySelector('#results h1').textContent = `You have ${correct} right answers`
        : document.querySelector('#results h1').textContent = `You are recognized as top JavaScript fan!`
      }
    }))
}
