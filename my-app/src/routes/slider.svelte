<script>

  import { onMount, onDestroy } from 'svelte';

  const BASE_URL = `https://api.unsplash.com`;

  let images = [];
  let interval;

  async function fetchImages() {
    const response = await fetch(
      `${BASE_URL}/search/photos?query=gaming&client_id=-N6JZHxqqovedx2eWCPPe5NbO2-r3h1SJE5_PnCWU7E`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const { results } = await response.json();
    images = results.map((result) => result.urls.regular);
  }

  let slide;
  let slideIndex = 0;

  function moveSlides() {
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  const images = slide.querySelectorAll('img');
  images.forEach((image, index) => {
    if (index === slideIndex) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });
}
  onMount(() => {
    fetchImages().then(() => {
      moveSlides();

      // Start the automatic slideshow
      interval = setInterval(() => {
        slideIndex = (slideIndex + 1) % images.length;
        moveSlides();
      }, 5000);
    });
  });
  onDestroy(() => {
    // Stop the automatic slideshow when the component is destroyed
    clearInterval(interval);
  });
</script>
<main>
  <div class="container">
    <div class="slider">
      
      <div class="slide" bind:this={slide}>
        {#each images as image}
        <img src={image} alt="slide image" />
        {/each}
      </div>
    </div>
  </div>
</main>
<style>
*,::after,*::before{
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  display: grid;
  place-items: center;
  padding: 2rem 0;
  
}
.slider {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 
    20px 20px 50px hsl(210, 50%, 40% .4),
    -20px -20px 50px hsl(210, 50%, 80% .2);
}

.slide img {
  width: 100%;
  flex: 1 0 100%;
  opacity: 0;
  transition: opacity 3s ease;
  
}
.slide{
  width: 100%;
  height: 400px;
  max-height: 100vh;
  display: flex;
  transition: opacity 400ms ease-out;
  background-color: black;
}

</style>
