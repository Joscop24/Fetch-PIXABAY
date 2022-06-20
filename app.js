let kapi = "28109630-989232fecefc0255158015b51";
let searchDefault = "sun";
let body = document.body;

function search() {
    var inpt = document.getElementById("output")
    var ipn = (!inpt.value) ? "sun":"bitcoin"//searchDefault : inpt.value.toLowerCase();
    console.log(inpt.value);
  var lang = document.getElementById("lan");
  !lang ? "fr" : lang.value;
  fetch(
    `https://pixabay.com/api/?key=${kapi}&q=${ipn}&image_type=photo&per_page=90&lang=${lang}`
  ).then(function (response) {
    response.json().then(function (pixdata) {
      //(pixdata)
      divclear()
      cards(pixdata.hits); // (pixdata.hits)
    });
  });
}

function nav() {
    let input = document.createElement("input");
    let app = document.createElement('div')
    app.setAttribute('id', 'app')
    input.setAttribute("class", "d-flex justify-content-end");
    input.setAttribute("id","output")
    input.setAttribute('onkeyup', "search()")
    body.appendChild(input);
    body.appendChild(app)
    search()
}
nav()
function divclear(){
    document.getElementById('app').innerHTML=''
}
function cards(data) {
  //   console.log(data)
  let row = document.createElement("div");
  let cont = document.createElement("div");
  cont.setAttribute("class", "container");
  row.setAttribute("class", "row");

  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    let h1 = document.createElement("h1");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");
    let div = document.createElement("div");
    let col = document.createElement("div");
    let cards = document.createElement("div");

    // Chercher les images
    img.src = data[i].webformatURL;

    // Ajouts des Attributs
    img.setAttribute("class", "card-img-top ");
    div.setAttribute("class", "card ");
    cards.setAttribute("class", "text-center");
    col.setAttribute("class", "col-md-4");
    p.setAttribute("class", "card-text");

    // div.style.width = "18rem";

    // Textes
    p.innerHTML = `De ${data[i].user} | Tags ${data[i].tags}`;

    // AppendChild

    cards.appendChild(img);
    cards.appendChild(p);
    div.appendChild(cards);
    col.appendChild(div);
    row.appendChild(col);
  }
  
  cont.appendChild(row);
  var app = document.getElementById('app')
  app.appendChild(cont);
}
