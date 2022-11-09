// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function updateSubtotal(product) {
  const price = document.querySelector('.price span').innerHTML;
  const quantity = document.querySelector('.quantity input').value;

  const subtotalPrice = price * quantity

  const subtotalSpan = document.querySelector('.subtotal span');
  return subtotalSpan.innerHTML = subtotalPrice.toFixed(2)
}

function calculateAll() {
  // ITERATION 2
  

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
