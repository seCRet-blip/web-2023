<script>
  // Importing necessary functions from Svelte
  import { onMount, onDestroy } from 'svelte';

  // Base URL for the Unsplash API
  const BASE_URL = `https://api.unsplash.com`;

  // Array to store the fetched images from the API
  let images = [];
    // Variables to hold the slider and the current slide index
  let slide;
  let slideIndex = 0;

  // Variable to hold the interval for automatic slideshow
  let interval;
  let arr = [
  'ottlesbay oldhay ourfay indskay ofyay umray . ethay uickqay oxfay umpedjay onyay ethay eepingslay atcay ',
  'odecay isyay usedyay enwhay ecretssay areyay entsay . ickkay ethay allbay aightstray andyay ollowfay oughthray.',
  'ehay ooktay ethay eadlay andyay eptkay ityay ethay olewhay istanceday . ayay ongstray idbay aymay arescay ouryay artnerpay iffstay',
  'ayay uisecray inyay armway atersway inyay ayay eekslay achtyay isyay unfay . ighhay eatssay areyay estbay orfay ootballfay ansfay',
  'akefay &ones ineshay utbay ostcay ittlelay . ethay eetsstray areyay arrownay andyay ullfay ofyay arpshay urnstay . ',
  'eythay ooktay eirthay idskay omfray ethay ublicpay oolschay . ethay irstfay artpay ofyay ethay anplay eedsnay angingchay',
  'ehay usedyay ethay athelay otay akemay assbray objectsyay . ehay akestay ethay oathyay ofyay officeyay eachyay archmay . ',
  'oatflay ethay oapsay onyay optay ofyay ethay athbay aterway . ethay oldgay asevay isyay othbay areray andyay ostlycay . ',
  'ayay eakbray inyay ethay amday almostyay ausedcay ayay oodflay . eythay areyay enmay onhay alkway ethay iddlemay ofyay ethay oadray . ',
  'ushlay ernfay owgray onyay ethay oftylay ocksray . adammay , isthay isyay ethay estbay andbray ofyay orncay . '
];
  // Function to fetch images from the Unsplash API
  async function fetchImages() {
    const response = await fetch(
      // Fetching images with "gaming" as the search query using the Unsplash API
      `${BASE_URL}/search/photos?query=gaming&client_id=-N6JZHxqqovedx2eWCPPe5NbO2-r3h1SJE5_PnCWU7E`
    );

    if (!response.ok) {
      // Throw an error if the network response is not okay
      throw new Error('Network response was not ok');
    }

    const { results } = await response.json();
    // Extracting the regular URLs of the images from the API response and storing them in the 'images' array
    images = results.map((result) => result.urls.regular);
  }


  // Function to move the slides and update the opacity of the images
  function moveSlides() {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
   
    const images = slide.querySelectorAll('img');
    const texts = slide.querySelectorAll('.text');
    images.forEach((image, index) => {
      texts[index].style.left = `${slideIndex * 100}%`;
      if (index === slideIndex) {
        image.style.opacity = 1;
        texts[index].style.opacity = 1;
      } else {
        image.style.opacity = 0;
        texts[index].style.opacity = 0;
      }
    });
  }

  // Svelte lifecycle hook that runs when the component is mounted
  onMount(() => {
    // Fetch images from the Unsplash API and then perform necessary actions
    fetchImages().then(() => {
      // Move the slides to the initial position
      moveSlides();

      // Start the automatic slideshow
      interval = setInterval(() => {
        // Update the slide index to the next image index (circular)
        slideIndex = (slideIndex + 1) % images.length;
        // Move the slides to the updated index
        moveSlides();
      }, 5000);
    });
  });

  // Svelte lifecycle hook that runs when the component is destroyed
  onDestroy(() => {
    // Stop the automatic slideshow when the component is destroyed
    clearInterval(interval);
  });


</script>

<main>
  <div class="container">
    <div class="slider">
      <div class="slide" bind:this={slide}>
        {#each images as image , index}
        <!-- Display each image in the 'images' array -->
        <div class="text-container">
          <div class="text">{arr[index]}</div>
        </div>
      
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={image} alt="slide image" />
        {/each}
      </div>
    </div>
  </div>
</main>

  
<style>
  /* CSS styles for the slider and slides */

 .text {
    position: absolute;
    z-index: 1;
    margin-left: 5%;
    padding-top: 100px;
    padding-left: 25px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 400px;
    line-height: 30px;
  }
  *,
  ::after,
  ::before {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    display: grid;
    place-items: center;
    padding: 2rem 0;
    height: 400px;
    width: 100%;
  }

  .slider {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 20px 20px 50px hsl(210, 50%, 40% .4),
      -20px -20px 50px hsl(210, 50%, 80% .2);
  }

  .slide img {
    width: 100%;
    flex: 1 0 100%;
    opacity: 0;
    transition: opacity 3s ease;
    object-fit: cover;
    z-index: 0;
  }

  .slide {
    position: relative;
    width: 100%;
    height: 400px;
    max-height: 100vh;
    display: flex;
    transition: opacity 400ms ease-out;
    background-color: black;
  }
</style>
