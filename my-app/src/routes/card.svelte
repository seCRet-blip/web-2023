
<script>

  //importing the ImageCard component
  import ImageCard from './ImageCard.svelte';
    // Import the TextCard  components
  import TextCard from './TextCard.svelte';

// Define an array of objects to represent the cards
  const cards = [
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Everyyay ordway",
      caption: "ethay inksay isyay ethay ingthay inyay ichwhay eway ilepay ishesday . ethay orsehay alkedbay andyay ewthray ethay alltay iderray . "
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Ethay upcay ackedcray",
      caption: "ayay eepstay ailtray isyay ainfulpay orfay ouryay eetfay . ethay apmay adhay anyay x atthay eantmay othingnay."
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Ethay eckwray ",
      caption: "ethay assbray ubetay ircledcay ethay ighhay allway . ayay eaplay orfay undsfay eemssay otay omecay againyay . "
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Endsay ethay",
      caption: "oodway isyay estbay orfay akingmay oystay andyay ocksblay . ethay itekay ippedday andyay ayedsway , utbay ayedstay aloftyay . "
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      announcement:"ethay | eckwray",
      title: "Ickthay aperpay",
      caption: "atscay andyay ogsday eachyay atehay ethay otheryay . ethay eachbay isyay ydray andyay allowshay atyay owlay idetay ."
    }
  ];

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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       class="feather feather-arrow-left">
       <line x1="19" y1="12" x2="5" y2="12">
       </line>
        <polyline points="12 19 5 12 12 5">
        </polyline>
      </svg>
      
    </button>
    <button class="Next" on:click={nextCard}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
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
      <div class="text-container">
        <TextCard title="Design and Simulation" text="NVIDIA RTX™ and NVIDIA Omniverse™
          deliver the performance to help professionals, creators, developers,
          and students worldwide enhance creative workflows and build, operate,
          and connect metaverse applications." />
      </div>
      {#each cards as card}
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

.Prev ,.Next{
  margin-top: 15px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
  background-color: #6ca404;
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
  padding: 0;
  margin: 0;
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
  

</style>
