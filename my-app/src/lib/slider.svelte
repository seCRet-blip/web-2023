<script>
  // Importing necessary functions from Svelte
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';
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
  { title: 'Virtual Realms', text: 'Experience the world of Virtual Realms, where cutting-edge technology transports you to new and exciting game worlds. Dive deep into immersive gameplay and unleash your gaming prowess.' },
  { title: 'Cyber Intrigue', text: 'In the realm of Cyber Intrigue, secrets are encrypted and battles take place in the digital domain. Crack the codes and navigate through virtual mazes to emerge victorious.' },
  { title: 'Pixel Quest', text: 'Embark on the Pixel Quest, where retro graphics meet modern gameplay. Jump, dodge, and collect power-ups in this pixelated adventure to save the princess and restore peace to the gaming universe.' },
  { title: 'Epic Showdowns', text: 'Prepare for Epic Showdowns on the battlefield, where intense gaming competitions unfold. Strategize, aim true, and outsmart your opponents to claim victory and become a gaming legend.' },
  { title: 'Gadgets Galore', text: 'Discover Gadgets Galore, a world of cutting-edge technology and innovation. From augmented reality glasses to advanced gaming consoles, explore the latest gadgets that redefine the way we play.' },
  { title: 'Game Masters', text: 'Unleash your inner Game Master and take charge of epic quests. Guide your team through treacherous dungeons, solve mind-bending puzzles, and triumph over formidable foes.' },
  { title: 'Tech Titans', text: 'Step into the shoes of Tech Titans, visionary pioneers shaping the future of gaming and technology. Create groundbreaking inventions, revolutionize gameplay mechanics, and leave a lasting impact on the industry.' },
  { title: 'Digital Voyages', text: 'Embark on Digital Voyages to uncharted virtual worlds. Explore breathtaking landscapes, engage in thrilling quests, and forge alliances with fellow gamers in this vast interconnected gaming universe.' },
  { title: 'Console Conquerors', text: 'Rise as Console Conquerors and dominate the gaming realm. From epic RPGs to heart-pounding shooters, conquer new levels, unlock achievements, and etch your name in gaming history.' },
  { title: 'Tech Revolution', text: 'Witness the Tech Revolution sweeping the gaming industry. Experience mind-blowing advancements, from realistic graphics to immersive virtual reality, as technology continues to redefine the way we play.' }
];

  
images = ($page.data.props?.images || []).slice(0, 9);
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

  onMount(() => {
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

onDestroy(() => {
  // Stop the automatic slideshow when the component is destroyed
  clearInterval(interval);
});

  // Svelte lifecycle hook that runs when the component is destroyed
  onDestroy(() => {
    // Stop the automatic slideshow when the component is destroyed
    clearInterval(interval);
  });


</script>


  <div class="container">
    <div class="slider">
      <div class="slide" bind:this={slide}>
        {#each images as image, index (image)}
        <!-- Display each image in the 'images' array -->
        <div class="text-container">
          <div class="text">
            {#if arr[index]}
              <h2>{arr[index].title}</h2>
              <p>{arr[index].text}</p>
            {/if}
          </div>
        </div>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={image} alt="slide image" />
        {/each}
      </div>
    </div>
  </div>




  
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
    width: 30%;
    line-height: 30px;
    box-sizing: border-box;
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
      width: 100%;
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
  @media screen and (max-width: 600px) {
  .text {
    width: 30%; /* Adjust as needed */
  }

  .container {
    width: 800px;
  }

  .slider {
    width: 100%;
  }

  .slide img {
    width: 100%;
  }
}
</style>
