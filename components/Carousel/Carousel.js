/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container")

const Carousel () {
  
   const carouselDiv = document.createElement("div");
   carouselDiv.classList.add("carousel");

   const leftButton = document.createElement("div");
   leftButton.classList.add("left-button");

   const bones = document.createElement("img");
   bones.src = assets/bones.jpg;

   const fido = document.createElement("img");
    fido.src =  assets/fido.jpg;

   const max = document.createElement("img");
   max.src = assets/max.jpg;

   const puppers = document.createElement("img");
   puppers.src = assets/puppers.jpg

   const sir = document.createElement("img");
   sir.src = assets/sir.jpg;
   
   const rightButton = document.createElement("div");
   rightButton.classList.add("right-button");

return Carousel;

}