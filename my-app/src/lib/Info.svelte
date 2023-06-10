<script>
import { page } from '$app/stores';

let images = ($page.data.props?.images || []).slice(0, 6);

let flippedStates = images.map(() => false);  // Initialize array with false values

const flipCard = (index) => {
  if (flippedStates[index]) {
    flippedStates = flippedStates.map(() => false); // Reset all cards if clicked card is already flipped
  } else {
    flippedStates = flippedStates.map((state, i) => i === index); // Flip the state of the clicked card and reset the others
  }
};
let cardTexts = [
  {
    title: "Evolution of Gaming Consoles",
    text: "Embark on a journey to discover the fascinating evolution of gaming consoles over the decades. Starting from the advent of the earliest home systems like the Magnavox Odyssey and Atari, we trace the path to today's highly sophisticated platforms such as PlayStation 5 and Xbox Series X. Delve into the exponential improvements in graphics, processing power, and game design, along with a profound shift in the players' gaming experiences. Understand how these advancements have revolutionized the gaming industry and created a cultural phenomenon that extends beyond mere entertainment."
  },
  {
    title: "Gaming Console Hardware",
    text: "Immerse yourself in a comprehensive understanding of the hardware components that drive your favorite gaming consoles. Get an in-depth look at the role of key components such as GPUs, CPUs, RAM, and more that come together to create immersive gaming experiences. Learn about how these pieces of hardware work together to support complex game designs and sophisticated graphics, providing you with the high-quality gameplay you've come to expect from modern consoles."
  },
  {
    title: "Future of Gaming Consoles",
    text: "Explore the vast potential of the future of gaming consoles. Investigate emerging trends from the expanding world of virtual reality and cloud gaming to the increasingly integral role of artificial intelligence. Understand how these evolving technologies might shape the future of the gaming industry, introducing new ways of interacting with games, revolutionizing game design, and creating opportunities for even more immersive experiences."
  },
  {
    title: "Virtual Reality in Gaming",
    text: "Step into the exciting world of virtual reality gaming. Discover how VR technology is being utilized today to create games that provide deeply immersive experiences unlike anything else. Explore the latest VR devices, the mechanics behind their design, and the games that leverage this technology to its fullest. Also, look forward to the potential future advancements, such as haptic feedback suits and more realistic visuals, that could take VR gaming to new heights."
  },
  {
    title: "Artificial Intelligence in Gaming",
    text: "Delve into how artificial intelligence is revolutionizing the gaming industry. Learn about the ways AI is being utilized, from controlling NPC behavior to creating dynamic game environments. Understand the depth and complexity that AI can bring to games, enhancing realism and providing players with unique, adaptive challenges. Also, explore the impact of AI on game development and future trends, like machine learning and procedural content generation."
  },
  {
    title: "Impact of Cloud Gaming",
    text: "Discover the rise of cloud gaming and its transformative potential. Uncover how the shift to cloud-based platforms has the potential to redefine how we play and access games, providing flexibility and convenience like never before. Explore the benefits and challenges of cloud gaming, from its potential to make gaming more accessible to the network requirements and potential latency issues. Learn about how this technology may shape the future of the gaming industry."
  },
];


</script>
{#each cardTexts as cardText, index}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="card" on:click={() => flipCard(index)}>
    <div class={`card-content ${flippedStates[index] ? 'flipped' : ''}`}>
      <div class="front">
        <img src={images[index]} alt={`Image ${index + 1}`} />
        <div class="text">
          <p>{cardText.title}</p>
        </div>
      </div>
      <div class="back">
        <div class="back-text">
          <p>{cardText.text}</p>
        </div>
      </div>
    </div>
  </div>
{/each}



<style>
  .card {
    perspective: 1000px;
    width: 90%;
    height: 400px;
    position: relative;
    margin-top: 5%;
    background-color: white;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2); /* Add shadow for 3D effect */
    transition: transform 0.2s, box-shadow 0.2s; /* Ensure smooth transitions for both transform and box-shadow */
    border-radius: 10px; 
    margin-left: 5%;
  }

  .card:hover {
    transform: scale(1.05); /* make the card slightly larger when hovered */
    box-shadow: 0 30px 40px rgba(0, 0, 0, 0.3); /* Enhance shadow when hovered for a more pronounced 3D effect */
  }
  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card-content.flipped {
    transform: rotateY(180deg);
  }

  .card .front, .card .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .front img, .card .back img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  .card .front .text, .card .back .text {
    width: 50%;

    box-sizing: border-box;
  }
  .text{
    font-size: 40px;
  }
  .card .back {
    transform: rotateY(180deg);
    background-color: white;
  }

  .back-text , .text {
    color: #333;
    
    width: 100%;
    height:100%;
  }
  .back-text{
    font-size: 25px;
  }
  .back-text{
    margin-left: 25%;
    margin-right: 25%;
    line-height: 30px;
  }

</style>

