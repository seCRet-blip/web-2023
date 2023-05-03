<script>
  import ImageCard from './ImageCard.svelte';
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

  import TextCard from './TextCard.svelte';
  

</script>

<div class="carousel-container">
  <div class="cards-container">


    
      
      <div class="image-container">
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
 .carousel-container {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
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
    display: none;
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
