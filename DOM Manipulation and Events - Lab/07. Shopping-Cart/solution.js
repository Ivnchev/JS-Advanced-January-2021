function solve() {
   let buttons = document.querySelectorAll('.add-product')
   let result = document.querySelector('textarea')
   let btn = document.querySelector('.checkout')
   let totalPrice = 0;
   let products = new Set()

   Array.from(buttons).forEach(x => {
      x.addEventListener('click', () => {
         let details = x.parentElement.previousElementSibling.children
         let price = x.parentElement.nextElementSibling.innerHTML
         totalPrice += Number(price)
         let name = details[0].textContent
         products.add(name)
         result.textContent += `Added ${name} for ${price} to the cart.\n`
      })
   })
   btn.addEventListener('click', () => {
      result.textContent += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`
      btnDisable();
   })
   function btnDisable() {
      Array.from(buttons).forEach(x => x.disabled = 'true')
      btn.disabled = 'true'
   }
}