<script>
  // Importing necessary functions from Svelte
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';

  // Array to store the fetched images from the API
  let images = [];
  images = ($page.data.props?.images || []).slice(0, 9);
  
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
  // Function to move the slides and update the opacity of the images
  function moveSlides() {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
   
    const images = slide.querySelectorAll('img');
    const texts = slide.querySelectorAll('.text-s');
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
<!-- Begin the container for the slider -->
<div class="container">
  <!-- The slider, which will contain slides -->
  <div class="slider relative">
    <!-- Each individual slide -->
    <div class="slide relative" bind:this={slide}>
      <!-- Loop through each image in the 'images' array -->
      {#each images as image, index (image)}
        <!-- Begin text container for each slide -->
        <div class="text-container-s">
          <!-- Text content for each slide, positioned absolutely -->
          <div class="text-s absolute">
            <!-- Check if the current index exists in the 'arr' array -->
            {#if arr[index]}
              <!-- Display the title text, splitting into individual words -->
              <h2>
                {#each arr[index].title.split(' ') as word, i}
                  <!-- If the word is the second word in the title, apply the 'second-word' class -->
                  {#if i === 1}
                    <span class="second-word">{word}</span>
                  <!-- If the word is not the second word in the title, apply the 'first-word' class -->
                  {:else}
                    <span class="first-word relative"> {word}</span> 
                  {/if}
                  &nbsp;
                {/each}
              </h2>
              <!-- Display the text for the slide -->
              <p>{arr[index].text}</p>
            {/if}
          </div>
        </div>
        <!-- Display the image for the slide with alternative text -->
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={image} alt="slide image" />
      {/each}
    </div>
  </div>
</div>


<style>
/* CSS styles for the slider and slides */

/* Style rules for screens with a maximum width of 600px (e.g., small devices like phones) */

/* Style rules for screens with a minimum width of 768px (e.g., tablets in portrait mode) */
@media screen and (min-width: 768px){
  /* Adjust text container's margin-top and width */
  .text-s{
    margin-top: 5%;
    width: 50%;
  }
  /* Set the container's width */
  .container{
    width: 800px;
  }
  /* Make the slide's width fill its container */
  .slide{
    width: 100%;
  }
}
/* Style rules for screens with a minimum width of 1000px (e.g., laptops and tablets in landscape mode) */
@media screen and (min-width: 1000px){
  /* Adjust text container's margin-top */
  .text-s{
    margin-top: 5%;
  }
  /* Set the container's width */
  .container{
    width: 1320px;
  }
  /* Make the slide's width fill its container */
  .slide{
    width: 100%;
  }
}
/* Style rules for screens with a minimum width of 1300px (e.g., larger laptops and desktop monitors) */
@media screen and (min-width: 1300px){
  /* Remove top margin from the text container */
  .text-s{
    margin-top: 0;
  }
  /* Set the container's width */
  .container{
    width: 1320px;
  }
  /* Make the slide's width fill its container */
  .slide{
    width: 100%;
  }
}

</style>
