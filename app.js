let kapi = "28109630-989232fecefc0255158015b51";
let searchDefault = "sun";
let body = document.body;



function search() {
    var inpt = document.getElementById("output")
    var ipn = (!inpt.value) ? "sun": inpt.value      //searchDefault : inpt.value.toLowerCase();
    console.log(inpt.value);
  var lang = document.getElementById("lan");
  !lang ? "fr" : lang.value;
  fetch(
    `https://pixabay.com/api/?key=${kapi}&q=${ipn}&image_type=photo&per_page=90&lang=${lang}`
  ).then(function (response) {
    response.json().then(function (pixdata) {
      console.log(pixdata);
      divclear()
      cards(pixdata.hits);
    });
  });
}



function nav() {
    // Variables
    let input = document.createElement("input");
    let app = document.createElement('div')
    let navbar = document.createElement('div')
    let p = document.createElement("p")

    // Atributs
    app.setAttribute('id', 'app')
    input.setAttribute("class", "col");
    input.setAttribute("id","output")
    input.setAttribute('onkeyup', "search()")
    navbar.setAttribute("class", "container")
    p.setAttribute("class","mt-2")

    // Texte
    p.innerHTML= "Search by Name"

    // AppendChild
    navbar.appendChild(p)
    navbar.appendChild(input)
    // navbar.appendChild(col)
    body.appendChild(navbar);
    body.appendChild(app)

    // Function
    search()
}
nav()



  // Permet de Rendre les recherches fluides sans laisser les anciennes recherches en bas de page
function divclear(){
    document.getElementById('app').innerHTML=''
}


  // Creation des Cards selon le nombre d'images et avec l'ajout en dessous du nom de l'artiste et son tag
function cards(data) {
  //   console.log(data)
  // Variables
  let row = document.createElement("div");
  let cont = document.createElement("div");
  
  // Attributs
  cont.setAttribute("class", "container");
  row.setAttribute("class", "row");

  // Boucle FOR
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
    col.setAttribute("class", "col-md-4 mt-3");
    p.setAttribute("class", "card-text");


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
