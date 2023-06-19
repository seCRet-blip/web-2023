<script>
  import { page } from '$app/stores';
  import TextCard from '$lib/TextCard.svelte';
  let images = ($page.data.props?.images || []).slice(0, 6);

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

  
  cardTexts = cardTexts.map((card, index) => {
    return {
      ...card,
      imageSrc: images[index] || null
    };
  });
  
    
  
  </script>
  {#each cardTexts as card }
  <div class="card relative card-base">
    <div class="textContainer {card.class}" >
      <div class="text ">
        <TextCard textCardType={card.textCardType} title={card.title} text={card.text} />
      </div>
    </div>
    <div class="imageContainer">
      <div class="image" style="background-image: url({card.imageSrc});"></div>
    </div>
  </div>
  {/each}
  
  
  
  
  <style>


@media only screen and (max-width: 600px) { 

  .card {
    width: 800px;
    height: 1300px;
 
  }

  .textContainer, .imageContainer {
    width: 100%;
  }

  .image {
    height: 100%;
  }


}

  </style>
  
  