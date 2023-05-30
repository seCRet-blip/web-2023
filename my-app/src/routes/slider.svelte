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
  const slideItems = slide.querySelectorAll('.slide-item');
  slideItems.forEach((slideItem, index) => {
    if (index === slideIndex) {
      slideItem.style.opacity = 1;
    } else {
      slideItem.style.opacity = 0;
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
  let arr;

onMount(() => {
  arr = ['slide1','slide2','slide3','slide4','slide5','slide6','slide7','slide','slide9','slide10','slide11' ];
});
</script>
<main>
  <div class="container">
    <div class="slider">
      <div class="slide" bind:this={slide}>
        {#each images as image, index (index)}
          <div class="slide-item">
            <img src={image} alt="slide image" />
            {#if arr && arr[index]}
              <div class="text">{arr[index]}</div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>




<style>
.text {
  position: absolute;
  top: 50%;
  left: 50%;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
}
.slide-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 3s ease;
}

.slide-item img {
  width: 100%;
  object-fit: cover;
}

.slide-item:first-child {
  opacity: 1;
}

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
  height: 400px;
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
  object-fit: cover;
  
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
