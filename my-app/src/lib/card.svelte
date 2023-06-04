
<script>

  //importing the ImageCard component
  import ImageCard from '$lib/ImageCard.svelte';
    // Import the TextCard  components
  import TextCard from '$lib/TextCard.svelte';

  const BASE_URL = `https://api.unsplash.com`;
  
// Use the function for both card arrays


const cards = [

    {
      type: "TextCard",
    title: "Design and Simulation",
    text: "NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance to help professionals, creators, developers, and students worldwide enhance creative workflows and build, operate, and connect metaverse applications."
  },
  {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",

      title: "Virtual Reality Gaming",
      caption: "Dive into immersive worlds with virtual reality gaming. Experience games in a way you never thought possible."
    },
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Emergence of Esports",
      caption: "Esports are taking the world by storm, transforming the landscape of competitive gaming."
    },
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "AI in Gaming",
      caption: "AI is revolutionizing game development, creating more dynamic and realistic gameplay experiences."
    },
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",

      title: "Blockchain in Gaming",
      caption: "Discover how blockchain is providing new ways for gamers to own and trade virtual assets."

    },
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Mobile Gaming Trends",
      caption: "Mobile gaming continues to dominate the industry with innovative games and new technologies."
    },
    {
    type: "TextCard",
    title: "Design and Simulation",
    text: "NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance to help professionals, creators, developers, and students worldwide enhance creative workflows and build, operate, and connect metaverse applications."
  },
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Cloud Gaming Services",
      caption: "Cloud gaming is reshaping the industry, providing gamers access to games on any device, anytime."
    },
  
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Tech Advances in Console Design",
      caption: "The evolution of console design has seen major tech advances, offering superior gaming experiences."
    },
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "AR in Education",
      caption: "Augmented Reality is transforming education, making learning more interactive and engaging."
    },
    {
      imageSrc: "",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Cybersecurity in Technology",
      caption: "Learn about the importance of cybersecurity in safeguarding technology and digital data."
    }
    
  ];

  // ...

async function populateImageUrls() {
  const images = await fetchImages();

  for (let i = 0; i < Math.min(cards.length, images.length); i++) {
    cards[i].imageSrc = images[i];
  }
}

async function fetchImages() {
  const response = await fetch(
    `${BASE_URL}/search/photos?query=gaming&client_id=-N6JZHxqqovedx2eWCPPe5NbO2-r3h1SJE5_PnCWU7E&per_page=30&page=2`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const { results } = await response.json();
  return results.map((result) => result.urls.regular);
}

// Call the populateImageUrls function to populate the image URLs
populateImageUrls();

// ...

  const SLIDER_SIZE = 6;
  let sliderCards = [];

// Split the cards array into multiple arrays of length SLIDER_SIZE
for(let i = 0; i < cards.length; i += SLIDER_SIZE) {
  sliderCards.push(cards.slice(i, i + SLIDER_SIZE));
}

  let sliderState = sliderCards.map((_, i) => ({ currentCard: 0, imageContainer: null }));

function prevCard(sliderIndex) {
  let slider = sliderState[sliderIndex];
  slider.currentCard = Math.max(slider.currentCard - 1, 0);
  const cardWidth = slider.imageContainer.children[0].offsetWidth;
  slider.imageContainer.scrollTo(slider.currentCard * cardWidth, 0);
  console.log(cards.imageSrc)
}

function nextCard(sliderIndex) {
  let slider = sliderState[sliderIndex];
  slider.currentCard = Math.min(slider.currentCard + 1, slider.imageContainer.children.length - 1);
  const cardWidth = slider.imageContainer.children[0].offsetWidth;
  slider.imageContainer.scrollTo(slider.currentCard * cardWidth, 0);
}




</script>
{#each sliderCards as _, i (i)}
  <div class="carousel-container">
    <div class="nav-buttons">
      <button class="Prev"  on:click={()=>prevCard(i)}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" stroke-width="2" 
        stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
        <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      </button>
      <button class="Next"  on:click={()=>nextCard(i)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" stroke-width="2" 
         stroke-linecap="round" stroke-linejoin="round" 
         class="feather feather-arrow-right">
         <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>

    <div class="cards-container">
      <div class="image-container" bind:this={sliderState[i].imageContainer}>
        {#each sliderCards[i] as card}
          {#if card.type === "TextCard"}
            <div class="text-container">
              <TextCard title={card.title} text={card.text} />
            </div>
          {:else}
            <ImageCard
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              announcement={card.announcement}
              title={card.title}
              caption={card.caption}
            />
          {/if}
        {/each}
      </div>
    </div>
    
  </div>
{/each}

<style>

.nav-buttons {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 40px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
}

.feather {
  vertical-align: middle;
  padding-top: 2px;
}
.Prev:hover, .Next:hover {
  background: linear-gradient(to right, #2608eb, #add8e6);
  color: white;
  cursor: pointer;
}

.Prev ,.Next{
  margin-top: 15px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
  background: #2608eb;
  transition: background 0.5s ease;
  color: white;
  border: none;
}

 .carousel-container {
  width: 100%;
  position: relative;
  height: 550px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  padding-top: 40px;
}
  .cards-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%; 
  }
  
  .image-container {
    width: 100%;
    height: 100%;
    margin-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    
  }

  .image-container::-webkit-scrollbar {
  width: 8px; /* adjust as needed */
  height: 8px; /* adjust as needed */
}

.image-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* adjust as needed */
}

.image-container::-webkit-scrollbar-thumb {
  background: #888; /* adjust as needed */
  border-radius: 4px; /* adjust as needed */
}

.image-container::-webkit-scrollbar-button {
  display: none; /* hide the scrollbar buttons */
}

  
  .text-container {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 90px;
    transform: translateY(-80px); 
  }
  
@media only screen and (max-width: 800px) {
  .nav-buttons{
    display: none;
  }
  .cards-container{
    width: 800px;
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100vh;
  align-items: center;
  overflow: hidden;
  padding-bottom: 50px;
  }
.carousel-container{
    width: 100%;
    height: 100vh; /* 100% of viewport height */
    margin-bottom: 50px;
  }

  .image-container{
    display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      overflow-y: hidden; /* Add this line */
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
  }
  .text-container{
    display: none;
  }

}

</style>


