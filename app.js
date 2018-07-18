var moods = ['happy', 'meh', 'grumpy']
var catImages = {
  happy: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350',
  meh: 'http://sixcatsonedude.com/wp-content/uploads/2015/09/sixcats-068-300x300.jpg',
  grumpy: 'https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg',
}

function Cat(name, imageUrl){
  this.name = name
  this.imageUrl = imageUrl
  this.numberOfPets = 0
  this.mood = moods[0]
}
var cats = []
cats[cats.length] = new Cat('First Kitty', catImages['happy'])
cats[cats.length] = new Cat('Second Kitty', catImages['happy'])

function petCat(index) {
  var cat = cats[index]
  cat.numberOfPets++
  update(cat, index)
}
function giveTreat(index) {
  var cat = cats[index]
  cat.numberOfPets = -1
  petCat(index)
  oopsNewCat()
}
function oopsNewCat(){
  var oopsCat = new Cat('Accidental Cat #'+(cats.length - 1), catImages['grumpy'])
  cats[cats.length] = oopsCat
  setup()
}

function setup() {
  var catsElem = document.getElementById("cats")
  var template = ""

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i]
    template += `
    <div class="col-6">
      <h1>${cat.name}</h1>
      <img src="${cat.imageUrl}" alt="" id="${i + 'picture'}" style="height:250px;">
      <h3>Number of pets:</h3>
      <p id="${i + 'pets'}">${cat.numberOfPets}</p>
      <h3>Current mood:</h3>
      <p id="${i + 'mood'}">${cat.mood}</p>
      <button class="btn btn-primary" onclick="petCat(${i})">Pet</button>
      <button class="btn btn-danger" onclick="giveTreat(${i})">Give Treat</button>
    </div>
    `
  }

  catsElem.innerHTML = template
  if(cats.length > 5){
    alert('You should really think about your life decisions...\nThat is too many cats.')
  }
}

function update(cat, index) {
  document.getElementById(`${index + 'pets'}`).innerText = cat.numberOfPets
  var mood = ''
  if (cat.numberOfPets < 10) {
    mood = 'happy'
  } else if (cat.numberOfPets < 20) {
    mood = 'meh'
  } else {
    mood = 'grumpy'
  }

  if (mood != cat.mood) {
    cat.mood = mood
    cat.imageUrl = catImages[mood]
    document.getElementById(`${index + 'picture'}`).src = catImages[mood]
    document.getElementById(`${index + 'mood'}`).innerText = mood
  }
}

setup()







