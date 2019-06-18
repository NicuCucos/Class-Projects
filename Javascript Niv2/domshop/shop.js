function renderProduct(product){
    var card = document.createElement('div');
    card.className = "card col-md-3 mx-2 mt-2";
    var img = document.createElement('img');
    img.src = product.photos[0];
    img.className = "card-img-top";
    card.appendChild(img);
    var body = document.createElement('div');
    body.className = "card-body";
    var h5 = document.createElement('h5');
    h5.className = "card-title";
    h5.innerHTML = product.name;
    body.appendChild(h5);
    var p = document.createElement('p');
    p.className = "card-text";
    p.innerHTML = "Ingredients";
    body.appendChild(p);
    var price = document.createElement('p');
    price.innerHTML = "Pretul:    " + product.price.value +"    "+ product.price.currency;
    body.appendChild(price);
    var mass = document.createElement('p');
    mass.innerHTML = "Mass:    " + product.mass.value + product.mass.unit;
    body.appendChild(mass);
    var a = document.createElement('a');
    a.href = `#${product.id}`;
    a.className = "btn btn-primary";
    a.innerHTML = "Corzina";
    card.appendChild(body);
    body.appendChild(a);


    var row = document.querySelector('.row:nth-child(2)');
    row.appendChild(card);

    a.addEventListener('click',addToCart);

}

//renderProduct(products[0]);

function renderProductList(){
    for(var i=0; i<products.length; i++){
        renderProduct(products[i]);
        console.log(i)
    }
}

renderProductList();

function addToCart(e){
let product_id = (e.target.href.split("#").pop());
console.log(product_id);

if(localStorage.getItem('cart')!=null){
var products_cart = localStorage.getItem('cart').split(",")
}
else {
    var products_cart = [];
}




products_cart.push(product_id);
// alert(products_cart);


localStorage.setItem('cart', products_cart);


showMesage("your product is added to card");

function showMesage(message){

var div = document.createElement('div');
div.className = "alert alert-success alert-dismissible fade show";
div.setAttribute('role',"alert");
var strong = document.createElement('strong');
strong.innerHTML = "Succes!";
var p = document.createTextNode(message);
div.appendChild(strong);
div.appendChild(p);



var button = document.createElement('button');
button.className = "close";
button.setAttribute('data-dismiss', "alert");
button.setAttribute('aria-label', "close");
div.appendChild(button);



var span = document.createElement('span');
span.setAttribute('aria-hidden', "true");
span.innerHTML = "&times";
button.appendChild(span);

var section = document.getElementById('products');
section.appendChild(div);

setTimeout(function(){
    section.removeChild(div)
} , 5000);



//     <div class="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Succes</strong> your product is added to card.
//   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
}
}

function showCart(){

    if(localStorage.getItem('cart')!=null){
    var products_cart = localStorage.getItem('cart').split(",")
    }
    else {
        var products_cart = [];
    }




    var a = document.createElement('a');
    a.href = "#";
    a.className = "btn btn-primary btn-lg rounded-pill";
    var i = document.createElement('i');
    i.className = "fas fa-shopping-cart";
    var p = document.createTextNode(`items:${products_cart.length}`);
    a.appendChild(i);
    a.appendChild(p);
    var div = document.getElementsByClassName('product-cart')[0];
    div.appendChild(a);
}

showCart();
