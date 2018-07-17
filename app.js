var cat1 = {
  name: "Mr. Snibbly",
  imageUrl: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
  numberOfPets: 0,
  mood: 'happy'
}

var cat2 = {
  name: "Grumpy cat",
  imageUrl: "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg",
  numberOfPets: 11000,
  mood: 'grumpy'
}
var catImages = {
  happy: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350',
  meh: 'http://sixcatsonedude.com/wp-content/uploads/2015/09/sixcats-068-300x300.jpg',
  grumpy: 'https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg',
}

var cats = []
cats.push(cat1)
cats.push(cat2)
console.log(cats)


function petCat(index){
  var cat = cats[index]
  cat.numberOfPets++
  console.log(cat.numberOfPets)
  update(cat, index)
}

function setup(){
  var catsElem = document.getElementById("cats")
  var template = ""

  for(var i = 0; i < cats.length; i++){
    var cat = cats[i]
    template += `
    <div class="col-6">
      <h1>${cat.name}</h1>
      <img src="${cat.imageUrl}" alt="" id="${i + 'picture'}">
      <h3>Number of pets:</h3>
      <p id="${i + 'pets'}">${cat.numberOfPets}</p>
      <h3>Current mood:</h3>
      <p id="${i + 'mood'}">${cat.mood}</p>
      <button class="btn btn-primary" onclick="petCat(${i})">Pet</button>
    </div>
    `
  }

catsElem.innerHTML = template
}

function update (cat, index){
  document.getElementById(`${index + 'pets'}`).innerText = cat.numberOfPets
  if (cat.numberOfPets < 10){
    mood = 'happy'
  }else if (cat.numberOfPets < 20) {
    mood = 'meh'
  }else{
    mood = 'grumpy'
  }
  document.getElementById(`${index + 'mood'}`).innerText = mood
  document.getElementById(`${index + 'picture'}`).src = catImages[mood]
}

setup()







