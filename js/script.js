let qty1 = document.getElementById('qty1');
let qty2 = document.getElementById('qty2');
let qty3 = document.getElementById('qty3');

let total = document.getElementById('total');

function add(ind){
    if(ind==1){
        qty1.innerText = parseInt(qty1.innerText)  +1
        updateTotal();
       

    }else if(ind==2){
        qty2.innerText = parseInt(qty2.innerText ) +1
        updateTotal();
       
    }else if(ind==3){
        qty3.innerText = parseInt(qty3.innerText )+1
        updateTotal();
    }

}


function updateTotal(){
    total.innerText = ( parseInt(qty1.innerText) * 100) + (parseInt(qty2.innerText) * 20 ) + (parseInt(qty3.innerText) * 50)
    
}

function subtract(ind){
    if(ind==1){
        qty1.innerText = parseInt(qty1.innerText)  -1
        updateTotal();
       

    }else if(ind==2){
        qty2.innerText = parseInt(qty2.innerText ) -1
        updateTotal();
       
    }else if(ind==3){
        qty3.innerText = parseInt(qty3.innerText ) -1
        updateTotal();

}
}
