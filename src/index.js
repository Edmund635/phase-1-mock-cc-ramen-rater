// write your code here
const fetchRamens = () => {
    fetch('http://localhost:3000/ramens')
        .then((res) => res.json())
        .then((ramens) => {
            ramens.forEach((ramens) => {
                let img = document.createElement('img');
                img.src = ramens.image;
                let image = document.querySelector('#ramen-menu');
                let detailImage = document.querySelector('.detail-image');
                let detailName = document.querySelector('.name');
                let detailRestaurant = document.querySelector('.restaurant');
                let detailcomment = document.getElementById('comment-display');
                let detailrating = document.querySelector('#rating-display');
                image.append(img);
                img.addEventListener('click', function(e){
                   detailImage.src= img.src;
                   detailName.textContent = ramens.name;
                   detailRestaurant.textContent = ramens.restaurant;
                   detailcomment.innerHTML = ramens.comment;
                   detailrating.innerHTML = ramens.rating;

                });
                
    });
    console.log(ramens);
  });
};
fetchRamens();

const ramenForm = document.querySelector("#new-ramen");
function createRamen(e) {
  e.preventDefault();
  const name = document.querySelector("#new-name").value;
  const restaurant = document.querySelector("#new-restaurant").value;
  const newimage = document.querySelector("#new-image").value;
  const rating = document.querySelector("#new-rating").value;
  const comment = document.querySelector("#new-comment").value;
  let image = document.querySelector('#ramen-menu');
  let detailImage = document.querySelector('.detail-image');
  let detailName = document.querySelector('.name');
  let detailRestaurant = document.querySelector('.restaurant');
  let detailcomment = document.getElementById('comment-display');
  let detailrating = document.querySelector('#rating-display');
  const ramen = { name, restaurant, newimage, rating, comment };
  console.log(ramen);
  const img = document.createElement("img");
  img.src = ramen.newimage;
  img.details = ramen;
  image.append(img);
  e.target.reset;
  img.addEventListener('click', function(e){
    detailImage.src= img.src;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailcomment.innerHTML = ramen.comment;
    detailrating.innerHTML = ramen.rating;

 });
}
ramenForm.addEventListener("submit", createRamen);
