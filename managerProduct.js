class Product {
    name
    img
    price

    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

let products = JSON.parse(localStorage.getItem("products"));

function create() {
    let name = document.getElementById('nameP').value;
    let img = document.getElementById('img').value;
    let price = document.getElementById('price').value;
    products.push(new Product(name, img, price));
    localStorage.setItem("products",JSON.stringify(products));
    showManager();
}

function showManager() {
    document.getElementById("manager").hidden = false;
    document.getElementById("displayHome").hidden = true;

    let str = `<tr><th>#</th><th>Name</th><th>Price</th><th>Img</th><th>Edit</th><th>Delete</th></tr>`;
    for (let i = 0; i < products.length; i++) {
        str += "<tr>"
        str += `<td>${i + 1}</td>`
        str += `<td>${products[i].name}</td>`
        str += `<td>${products[i].price}</td>`
        str += `<td><img src="${products[i].img}" width="220" height="170"></td>`
        str += `<td><button onclick="showEdit(${i})">Edit</button></td>`
        str += `<td><button onclick="deleteP(${i})">Delete</button></td>`
        str += "</tr>"
    }
    document.getElementById("displayManager").innerHTML = str;
}

function showHome() {
    document.getElementById("manager").hidden = true;
    document.getElementById("displayHome").hidden = false;

    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                                 <figure class="effect-ming tm-video-item">
                                  <img src="${products[i].img}" alt="Image" STYLE="width: 100%;height: 230px">
                                  <figcaption class="d-flex align-items-center justify-content-center">
                                   <h2>${products[i].name}</h2>
                                   <a href="#">View more</a>
                                   </figcaption>
                                    </figure>
                                     <div class="d-flex justify-content-between tm-text-gray">
                                      <span class="tm-text-gray-light">${products[i].name}</span>
                                           <span>${products[i].price}</span>
                                 </div>
                          </div>`
    }
    document.getElementById("displayHome").innerHTML = str;
}


let indexEdit = -1;

function showEdit(index) {
    document.getElementById('nameP').value = products[index].name;
    document.getElementById('img').value = products[index].img;
    document.getElementById('price').value = products[index].price;
    indexEdit = index;
}

function saveEdit() {
    let name = document.getElementById('nameP').value;
    let img = document.getElementById('img').value;
    let price = document.getElementById('price').value;
    products[indexEdit] = new Product(name, img, price);

    localStorage.setItem("products",JSON.stringify(products));
    showManager();
    indexEdit = -1;
}

function deleteP(index) {
    products.splice(index, 1);
    localStorage.setItem("products",JSON.stringify(products));
    showManager();
}
