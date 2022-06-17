let kapi = '28109630-989232fecefc0255158015b51';
let search = "sun";

fetch(`https://pixabay.com/api/?key=${kapi}&q=${search}&image_type=photo&per_page=90`)
.then(function(response){
    response.json()
    .then(function(pixdata){
        getImg(pixdata.hits)
    }
    )
})

function getImg(data){
    console.log(data)
    for(let i=0; i < data.length; i++){
        const img = document.createElement('img')
        img.src = data[i].webformatURL;
        document.body.appendChild(img)
    }
}