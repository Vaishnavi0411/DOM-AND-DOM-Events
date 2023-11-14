// Dynamically add order item form fields
let trtag = document.createElement("tr");
function addDetils() {
  let tbodytag = document.getElementById("mycontent")
  let trtag = document.createElement("tr");

  let cell1 = document.createElement("td");
  let inputtag1 = document.createElement("input");
  inputtag1.type = "text";
  inputtag1.required = true;
  let cell1value = prompt("Enter Category name");
  inputtag1.value = cell1value;
  cell1.appendChild(inputtag1);

  let cell2 = document.createElement("td");
  let inputtag2 = document.createElement("input");
  inputtag2.type = "text";
  inputtag2.required = true;
  let cell2value = prompt("Enter item name")
  inputtag2.value = cell2value;
  cell2.appendChild(inputtag2)

  let cell3 = document.createElement("td");
  let qty = prompt("enter the price");
  cell3.innerText = qty


  let cell4 = document.createElement("td");
  let price = prompt("enter quantity");
  cell4.innerText = price

  let cell5 = document.createElement("td");
  let subtot = price * qty;
  cell5.innerText = subtot;

  const totalAmount = document.getElementById('total-amount');
  totalAmount.value = parseInt(totalAmount.value) + subtot

  trtag.appendChild(cell1);
  trtag.appendChild(cell2);
  trtag.appendChild(cell3);
  trtag.appendChild(cell4);
  trtag.appendChild(cell5);

  tbodytag.appendChild(trtag)
}
// Submit the order form
function submitOrder(event) {
  event.preventDefault();
  const totalAmount = document.getElementById('total-amount').value;
  alert(`Total amount to be paid: ${totalAmount}`);
}

// Export the submitOrder function for testing
module.exports = submitOrder;