<script>
  import { page } from '$app/stores';
  import TextCard from '$lib/TextCard.svelte';
  //images from the js file that calls the api//
  //then splits it into an array to then be used//
  let images = ($page.data.props?.images || []).slice(0, 6);
// array containing the content for the info cards//
let cardTexts = [
  {
    textCardType: "readmore",
    title: "NVIDIA Graphics Technology",
    class: "NVIDIA",
    text: "Embark on a comprehensive understanding of NVIDIA's innovative graphics technology. Explore the role of NVIDIA's GPUs in powering diverse hardware, creating stunning visual experiences, and enhancing gameplay. Grasp the impact of NVIDIA's cutting-edge technologies like ray tracing and DLSS in not just elevating gaming visuals but also in facilitating AI tasks, simulations.",
    imageSrc: null
},

    {
        textCardType: "readmore",
        title: "Gaming Console Hardware",
        class: "Gaming-Console",
        text: "Immerse yourself in a comprehensive understanding of the hardware components that drive your favorite gaming consoles. Get an in-depth look at the role of key components such as GPUs, CPUs, RAM, and more that come together to create immersive gaming experiences. Learn about how these pieces of hardware work together to support complex game designs and sophisticated graphics, providing you with the high-quality gameplay.",
        imageSrc: null
    },
    {
        textCardType: "readmore",
        title: "Future of Gaming Consoles",
        class: "Future",
        text: "Explore the vast potential of the future of gaming consoles. Investigate emerging trends from the expanding world of virtual reality and cloud gaming to the increasingly integral role of artificial intelligence. Understand how these evolving technologies might shape the future of the gaming industry, introducing new ways of interacting with games, revolutionizing game design, and creating opportunities for even more immersive experiences.",
        imageSrc: null
    },
    {
        textCardType: "readmore",
        title: "Virtual Reality in Gaming",
        class: "Virtual",
        text: "Step into the exciting world of virtual reality gaming. Discover how VR technology is being utilized today to create games that provide deeply immersive experiences unlike anything else. Explore the latest VR devices, the mechanics behind their design, and the games that leverage this technology to its fullest. Also, look forward to the potential future advancements, such as haptic feedback suits and more realistic visuals.",
        imageSrc: null
    },
    {
        textCardType: "readmore",
        title: "Artificial Intelligence in Gaming",
        class: "Artificial",
        text: "Delve into how artificial intelligence is revolutionizing the gaming industry. Learn about the ways AI is being utilized, from controlling NPC behavior to creating dynamic game environments. Understand the depth and complexity that AI can bring to games, enhancing realism and providing players with unique, adaptive challenges. Also, explore the impact of AI on game development and future trends.",
        imageSrc: null
    },
    {
        textCardType: "readmore",
        title: "Impact of Cloud Gaming",
        class: "Impact",
        text: "Discover the rise of cloud gaming and its transformative potential. Uncover how the shift to cloud-based platforms has the potential to redefine how we play and access games, providing flexibility and convenience like never before. Explore the benefits and challenges of cloud gaming, from its potential to make gaming more accessible to the network requirements and potential latency issues. Learn about how this technology may shape the future.",
        imageSrc: null
    },
];

  
  // Mapping over the cardTexts array. For each card object in the array, a new 
  // object is created with all the properties of the original card object and a 
  // new property imageSrc. The value of imageSrc is taken from the images array
  // at the corresponding index. If no image exists at that index, it defaults to null.
  cardTexts = cardTexts.map((card, index) => {
    return {
      ...card,
      imageSrc: images[index] || null
    };
  });


  </script>

  <!-- Loop over each item in the cardTexts array. For each item, a card is rendered -->
  {#each cardTexts as card }
    <!-- Card div with relative positioning and 'card-base' class -->
    <div class="card relative card-base">
      <!-- Text container div with class dynamically set to card's class property -->
      <div class="textContainer {card.class}" >
        <!-- Div for card text -->
        <div class="text ">
          <!-- Svelte component for displaying card text. The card's textCardType, title and text properties are passed as props -->
          <TextCard textCardType={card.textCardType} title={card.title} text={card.text} />
        </div>
      </div>
      <!-- Image container div -->
      <div class="imageContainer">
        <!-- Div for the image. The background image is set dynamically to the card's imageSrc property -->
        <div class="image" style="background-image: url({card.imageSrc});"></div>
      </div>
    </div>
  {/each}
