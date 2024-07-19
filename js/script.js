let qty1 = document.getElementById("qty1");
let qty2 = document.getElementById("qty2");
let qty3 = document.getElementById("qty3");

let total = document.getElementById("total");

let fade1 = document.getElementById(`fade1`);
let fad2 = document.getElementById(`fade2`);
let fad3 = document.getElementById(`fade3`);
 fade1.style.opacity= "10%"
 fade2.style.opacity= "10%"
 fade3.style.opacity= "10%"


function add(ind) {
    let qty  = document.getElementById(`qty${ind}`)
    let fade = document.getElementById(`fade${ind}`)
    qty.innerText = parseInt(qty.innerText) + 1
    fade.style.opacity= "100%"
    updateTotal();
}

function updateTotal() {
  total.innerText =
    parseInt(qty1.innerText) * 100 +
    parseInt(qty2.innerText) * 20 +
    parseInt(qty3.innerText) * 50;
}

function subtract(ind) {
  let qty = document.getElementById(`qty${ind}`);
  let fade = document.getElementById(`fade${ind}`);

  if (parseInt(qty.innerText) > 1) {
    if (parseInt(qty.innerText) == 2) {
      fade.style.opacity = "10%";
    }
    qty.innerText = parseInt(qty.innerText) - 1;
  }
  updateTotal();
}


function swim(id) {
  if (document.getElementById(`heart${id}`).style.color == "red") {
    document.getElementById(`heart${id}`).style.color = "black";
  } else {
    document.getElementById(`heart${id}`).style.color = "red";
  }
}
