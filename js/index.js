
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = [...document.getElementsByClassName('btn-remove')]
  removeProductBtns.forEach((btn) => btn.addEventListener('click', removeProduct))

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});

// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity

  product.querySelector('.subtotal span').innerHTML = subtotalPrice.toFixed(2);
  return subtotalPrice
}

function calculateAll() {
  // ITERATION 2 & 3
  const products = [...document.getElementsByClassName("product")]
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product)
  });

  document.querySelector("#total-value span").innerHTML = total.toFixed(2)


}

// ITERATION 4

function removeProduct(event) {
  const product = event.currentTarget.parentNode.parentNode
  const result = product.parentNode.removeChild(product)
  calculateAll()
  return result
  

}

// ITERATION 5

function createProduct() {
  // GET NEW PRODUCT INFO
  const newProductRow = document.querySelector(".create-product")
  const newProductName = newProductRow.querySelector(".name").value
  const newProductPrice = newProductRow.querySelector(".price").value
  
  const ironhackedNewProductName = `Ironhack ${newProductName}`

  if (newProductName.length > 0  && newProductPrice > 0) {
  // CREATE NEW TR WITH NEW PRODUCT INFO
  let trProduct = document.createElement("tr");
  trProduct.setAttribute("class", "product");
  trProduct.innerHTML = `<td class=\"name\"><span>${ironhackedNewProductName}</span></td><td class=\"price\">$<span>${newProductPrice}</span></td><td class=\"quantity\"><input type=\"number\" value=\"0\" min=\"0" placeholder=\"Quantity\" /></td><td class=\"subtotal\">$<span>0</span></td><td class=\"action\"><button class=\"btn btn-remove\">Remove</button></td>`;
  document.querySelector("tbody").appendChild(trProduct)

  // MAKE REMOVE BUTTON WORK
  trProduct.querySelector(".btn-remove").addEventListener("click",removeProduct)
  } else {
    alert("Invalid new product information (some fields might be empty)")
  }
  
  // RESET INPUT FIELDS
  newProductRow.querySelector(".name").value = ""
  newProductRow.querySelector(".price").value = 0;

}
