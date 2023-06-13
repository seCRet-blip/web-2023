
<script>

  //importing the ImageCard component
  import ImageCard from '$lib/ImageCard.svelte';
    // Import the TextCard  components
  import TextCard from '$lib/TextCard.svelte';
  import { page } from '$app/stores';
  const BASE_URL = `https://api.unsplash.com`;
  
// Use the function for both card arrays


const cards = [
    {
      type: "TextCard",
    title: "Design and Simulation",
    textCardType: "dropdown", 
    text: "NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance to help professionals, creators, developers, and students worldwide enhance creative workflows and build, operate, and connect metaverse applications.",
    cardClass: "test",
    cardClassD:"test2"
  },
  {
    type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Gaming | Evolution",

      title: "Virtual Reality Gaming",
      caption: "Dive into immersive worlds with virtual reality gaming. Experience games in a way you never thought possible."
    },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Rise Of Esports",
      title: "Emergence of Esports",
      caption: "Esports are taking the world by storm, transforming the landscape of competitive gaming."
    },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"AI | Revolution",
      title: "AI in Gaming",
      caption: "AI is revolutionizing game development, creating more dynamic and realistic gameplay experiences."
    },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Blockchain | Bonanza",
      title: "Blockchain in Gaming",
      caption: "Discover how blockchain is providing new ways for gamers to own and trade virtual assets."

    },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Mobile Mastery",
      title: "Mobile Gaming Trends",
      caption: "Mobile gaming continues to dominate the industry with innovative games and new technologies."
    },
    {
      type: "TextCard",
      textCardType: "dropdown",
      title: "Innovation in Gaming Consoles",
      text: "From 8-bit systems to modern consoles, the gaming industry has seen massive technological advancements. Today's devices offer high-resolution graphics, virtual reality support, and interactive gameplay. The future of gaming holds even more exciting possibilities.",
      cardClass:"Gaming",
      cardClassD:"GamingD"
  },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Cloud | Power",
      title: "Cloud Gaming Services",
      caption: "Cloud gaming is reshaping the industry, providing gamers access to games on any device, anytime."
    },
  
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Design | Dreams",
      title: "Tech Advances in Console Design",
      caption: "The evolution of console design has seen major tech advances, offering superior gaming experiences."
    },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Education | Upgrade",
      title: "AR in Education",
      caption: "Augmented Reality is transforming education, making learning more interactive and engaging."
    },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Security | First",
      title: "Cybersecurity in Technology",
      caption: "Learn about the importance of cybersecurity in safeguarding technology and digital data."
    },
    {
      type: "ImageCard",
      imageSrc: "",
      imageAlt: "Image",
      announcement:"Education | Upgrade",
      title: "AR in Education",
      caption: "Augmented Reality is transforming education, making learning more interactive and engaging."
    },
    {
  type: "TextCard",
  textCardType: "dropdown",
  title: "The Future of Technology",
  text: "As technology advances rapidly, the future looks promising. Emerging technologies like AI, quantum computing, and robotics will reshape industries and revolutionize our lives. With each innovation, we move closer to a world of enhanced communication, automation, and limitless possibilities.",
  cardClass: "Technology",
  cardClassD:"TechnologyD"
},
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "Advanced Robotics",
    announcement: "Technology | Future",
    title: "Advancements in Robotics",
    caption: "Advanced robotics is revolutionizing various industries, from manufacturing and healthcare to space exploration, paving the way for automation and enhanced efficiency."
  },
  {
    type: "ImageCard",
    imageSrc: "i",
    imageAlt: "Self-Driving Car",
    announcement: "Transportation | Innovation",
    title: "Autonomous Vehicles",
    caption: "Self-driving cars and other autonomous vehicles are reshaping transportation, promising safer roads, reduced congestion, and more efficient mobility systems."
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "Futuristic City",
    announcement: "Architecture | Urban Planning",
    title: "Smart Cities",
    caption: "The concept of smart cities involves using technology to create sustainable and efficient urban environments, with features like IoT connectivity, renewable energy, and improved infrastructure."
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "Quantum Computing",
    announcement: "Technology | Breakthrough",
    title: "Quantum Computing",
    caption: "Quantum computing has the potential to revolutionize computational power, enabling complex calculations and solving problems that are currently infeasible for classical computers."
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "Wearable Technology",
    announcement: "Healthcare | Personalization",
    title: "Wearable Devices",
    caption: "Wearable technology, such as smartwatches and fitness trackers, is becoming increasingly advanced, enabling personalized health monitoring, activity tracking, and seamless integration with our daily lives."
  },
  {
    type: "TextCard",
    title: "Introduction to AI",
    textCardType: "dropdown",
    text: "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
    cardClass: "AI_Intro",
    cardClassD:"AI_IntroD"
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "AI Evolution",
    announcement:"AI | Evolution",
    title: "Evolution of AI",
    caption: "AI has evolved significantly over time, from simple rule-based systems to complex machine learning models. With each advancement, AI systems become more capable and impactful."
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "AI in various industries",
    announcement:"Industries | AI Transformation",
    title: "AI in Various Industries",
    caption: "AI has been transforming various industries, providing automated solutions, efficient processes, and data-driven insights."
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "AI in Healthcare",
    announcement:"AI | Healthcare Revolution",
    title: "AI in Healthcare",
    caption: "AI is revolutionizing healthcare, from improving diagnostic accuracy to personalizing treatment plans."
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "AI Ethics",
    announcement:"Ethics | AI Challenges",
    title: "Ethics in AI",
    caption: "As AI becomes more prevalent, ethical considerations around privacy, bias, and control have become increasingly important."
  },
  {
    type: "ImageCard",
    imageSrc: "",
    imageAlt: "AI in Future",
    announcement:"Future | AI Prospects",
    title: "Future of AI",
    caption: "The future of AI holds vast potential, with possibilities like advanced automation, smarter algorithms, and seamless human-machine interaction."
  }
  ];


  let images = []; 
  if ($page.data.props) {
images = ($page.data.props?.images || []).slice(9);

    
    let imageIndex = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].type === 'ImageCard') {
            cards[i].imageSrc = images[imageIndex];

            imageIndex++;
            if (imageIndex >= images.length) {
                imageIndex = 0;  // Loop back to the start if we've used all images
            }
        }
    }
}
  const SLIDER_SIZE = 6;
  let sliderCards = [];
  let sliderState =[];
// Split the cards array into multiple arrays of length SLIDER_SIZE
$: {
  sliderCards = [];
  for (let i = 0; i < cards.length; i += SLIDER_SIZE) {
    const sliderGroup = cards.slice(i, i + SLIDER_SIZE);
    sliderCards.push(sliderGroup);
  }

  // Initialize or update sliderState
  sliderState = sliderCards.map((_, i) => sliderState[i] || { currentCard: 0, imageContainer: null });
}
function nextCard(sliderIndex) {
  let updatedSliderState = [...sliderState];

  if (updatedSliderState[sliderIndex].currentCard < sliderCards[sliderIndex].length - 3) {
    updatedSliderState[sliderIndex].currentCard += 1;

    const cardWidth = updatedSliderState[sliderIndex].imageContainer.scrollWidth / sliderCards[sliderIndex].length;
    updatedSliderState[sliderIndex].imageContainer.scrollTo(updatedSliderState[sliderIndex].currentCard * cardWidth, 0);
  }

  sliderState = updatedSliderState;
}

function prevCard(sliderIndex) {
  let updatedSliderState = [...sliderState];

  if (updatedSliderState[sliderIndex].currentCard > 0) {
    updatedSliderState[sliderIndex].currentCard -= 1;

    const cardWidth = updatedSliderState[sliderIndex].imageContainer.scrollWidth / sliderCards[sliderIndex].length;
    updatedSliderState[sliderIndex].imageContainer.scrollTo(updatedSliderState[sliderIndex].currentCard * cardWidth, 0);
  }

  sliderState = updatedSliderState;
}
</script>


{#each sliderCards as _, i (i)}
  <div class="carousel-container">
    {#each sliderCards[i] as card}
    {#if card.type === "TextCard"}
      <div class="text-container mobile-only {card.cardClass}">
        <TextCard textCardType={card.textCardType} title={card.title} text={card.text} />
      </div>
    {/if}
  {/each}
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

    <!-- Mobile only TextCard -->
    <div class="cards-container">
      
      <div class="image-container" bind:this={sliderState[i].imageContainer}>
        {#each sliderCards[i] as card}
          {#if card.type === "TextCard"}
           
          <div class="text-container {card.cardClassD}">
            <TextCard textCardType={card.textCardType} title={card.title} text={card.text} />
          </div>
          
          {:else}
          <!--
            image src wont come through here
          -->
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
:root {
  --cool-gray: #9499AAff;
--lavender-web: #C9CFE3ff;
--blue-gray: #6994C5ff;
--french-gray: #BEC3D5ff;
--lavender-web-2: #D5DBEEff;
--white: #FEFEFEff;
}
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
  filter: brightness(120%);
  color: white;
  cursor: pointer;
}

.Prev ,.Next{
  margin-top: 15px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
  background-color: var(--blue-gray);
  
  color: var(--white);
  border: none;
}

 .carousel-container {
  width: 100%;
  position: relative;
  height: 600px;
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
  background: var(--lavender-web); /* adjust as needed */
}

.image-container::-webkit-scrollbar-thumb {
  background: var(--blue-gray); /* adjust as needed */
  border-radius: 4px; /* adjust as needed */
}

.image-container::-webkit-scrollbar-button {
  display: none; /* hide the scrollbar buttons */
}

  
  .text-container {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 40px;
    color: var( --raisin-black);
    
    transform: translateY(-80px); 
  }
  .mobile-only {
  display: none;
}
@media only screen and (max-width: 600px) {
  .nav-buttons{
    display: none;
  }
  .cards-container{
    width: 800px;
    display: flex;
    flex-direction: row;
    position: relative;
    height: 150vh;
  align-items: center;
  overflow: hidden;

  }
.carousel-container{
  position: relative;  
   width: 800px;
    height: 150vh; /* 100% of viewport height */
    margin-bottom: 50px;
    padding-top: 300%;
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
  .text-container.mobile-only {
    display: block;
    position: absolute;
    top: 200px;  /* Adjust this value according to your needs */
    width: 90%;  /* This will make it take full width of its parent element */
  /* Ensure it appears above other elements */
    height: 25%;
    margin-left: 10%;
  }
  

}

</style>


