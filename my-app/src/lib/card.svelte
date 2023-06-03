
<script>

  //importing the ImageCard component
  import ImageCard from '$lib/ImageCard.svelte';
    // Import the TextCard  components
  import TextCard from '$lib/TextCard.svelte';

  const BASE_URL = `https://api.unsplash.com`;
  
// Use the function for both card arrays

const cards = [
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

  async function populateImageUrls() {
    const images = await fetchImages();

    for(let i = 0; i < Math.min(cards.length, images.length); i++) {
      cards[i].imageSrc = images[i];
    }
    console.log(cards);
  }

  populateImageUrls();




// Define an array of objects to represent the cards




   // Initialize variables to keep track of the current card and the image container
   let currentCard = 0;
  let imageContainer;

  // Function to display the previous card in the slider
  function prevCard() {
    currentCard = Math.max(currentCard - 1, 0);
    const cardWidth = imageContainer.scrollWidth / cards.length;
    imageContainer.scrollTo(currentCard * cardWidth, 0);
  }

  // Function to display the next card in the slider
  function nextCard() {
    currentCard = Math.min(currentCard + 1, cards.length - 1);
    const cardWidth = imageContainer.scrollWidth / cards.length;
    imageContainer.scrollTo(currentCard * cardWidth, 0);
  }
</script>


<div class="carousel-container">
  <div class="nav-buttons">
    <button class="Prev" on:click={prevCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       class="feather feather-arrow-left">
       <line x1="19" y1="12" x2="5" y2="12">
       </line>
        <polyline points="12 19 5 12 12 5">
        </polyline>
      </svg>
      
    </button>
    <button class="Next" on:click={nextCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
      class="feather feather-arrow-right">
      <line x1="5" y1="12" x2="19" y2="12">
      </line>
      <polyline points="12 5 19 12 12 19">
      </polyline>
    </svg>
    </button>
  </div>
  <div class="cards-container">
    <div class="image-container" bind:this={imageContainer}>
      <div class="text-container test">
        <TextCard  title="Design and Simulation" text="NVIDIA RTX™ and NVIDIA Omniverse™
          deliver the performance to help professionals, creators, developers,
          and students worldwide enhance creative workflows and build, operate,
          and connect metaverse applications." />
      </div>
      {#each cards.slice(0, 6) as card} <!-- first half -->
      <ImageCard
        imageSrc={card.imageSrc}
        imageAlt={card.imageAlt}
        announcement={card.announcement}
        title={card.title}
        caption={card.caption}
      />
    {/each}
    </div>
  </div>
</div>
<div class="carousel-container">
  <div class="nav-buttons">
    <button class="Prev" on:click={prevCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       class="feather feather-arrow-left">
       <line x1="19" y1="12" x2="5" y2="12">
       </line>
        <polyline points="12 19 5 12 12 5">
        </polyline>
      </svg>
      
    </button>
    <button class="Next" on:click={nextCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
      class="feather feather-arrow-right">
      <line x1="5" y1="12" x2="19" y2="12">
      </line>
      <polyline points="12 5 19 12 12 19">
      </polyline>
    </svg>
    </button>
  </div>

  <div class="cards-container">
    <div class="image-container" bind:this={imageContainer}>
      <div class="text-container Gaming">
        <TextCard
        title="Gaming Redefined"
        text="Immerse yourself in a world of breathtaking graphics, thrilling gameplay, and limitless adventures with the latest gaming technologies. Explore expansive virtual worlds, compete with friends, and unlock your true gaming potential with cutting-edge hardware and software."
      />
      
      </div>
      {#each cards.slice(6) as card} <!-- second half -->
      <ImageCard
        imageSrc={card.imageSrc}
        imageAlt={card.imageAlt}
        announcement={card.announcement}
        title={card.title}
        caption={card.caption}
      />
    {/each}
    </div>
  </div>
</div>

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
.Prev:hover ,.Next:hover{
  background-color: black;
}

.Prev ,.Next{
  margin-top: 15px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
  background-color: #2608eb;
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