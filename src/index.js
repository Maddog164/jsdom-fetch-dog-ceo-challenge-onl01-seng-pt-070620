// console.log('%c HI', 'color: firebrick')

document.addEventListenerr("DOMContentLoaded", function() {
    loadImages();
})

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(results => {
            results.message.forEach(image => addImage(image))
        });
  }

  function addImage(dogPicUrl) {
      let container = document.querySelector('#dog-image-container');
      let newImageE1 = document.createElement('img');
      newImageE1.src = dogPicUrl;
      container.appendChild(newImageE1);
  }
