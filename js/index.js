// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = [...document.getElementsByClassName('btn-remove')]
  removeProductBtns.forEach((btn) => btn.addEventListener('click', removeProduct))
});

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity

  const subtotalSpan = product.querySelector('.subtotal span').innerHTML = subtotalPrice.toFixed(2);
  return subtotalPrice
}

function calculateAll() {
  // ITERATION 2
  const products = [...document.getElementsByClassName("product")]
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product)
  });

  document.querySelector("#total-value span").innerHTML = total.toFixed(2)

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode
  const result = product.parentNode.removeChild(product)
  calculateAll()
  return result
  

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
