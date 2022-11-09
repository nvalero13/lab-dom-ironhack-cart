// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
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
  console.log('The target in remove is:', target);
  //... your code goes here
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
