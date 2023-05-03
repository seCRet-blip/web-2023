<script>
  

  import ImageCard from './ImageCard.svelte';
  
  const cards = [
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      title: "PlayStation",
      caption: "This is a PlayStation."
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      title: "PlayStation",
      caption: "This is an Xbox."
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      title: "PlayStation",
      caption: "This is an Xbox."
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      title: "PlayStation",
      caption: "This is an Xbox."
    },
    {
      imageSrc: "src/lib/images/playstation.jpg",
      imageAlt: "Image",
      title: "PlayStation",
      caption: "This is a Nintendo Switch."
    }
  ];

  import TextCard from './TextCard.svelte';
  

</script>

<div class="carousel-container">
  <div class="cards-container">

    <div class="image-container">
    
      
      <div class="image-container">
        <div class="text-container">
          <TextCard title="Title 1" text="NVIDIA RTX™ and NVIDIA Omniverse™ deliver the performance to help professionals, creators, developers, and students worldwide enhance creative workflows and build, operate, and connect metaverse applications." />
        </div>
        {#each cards as card}
          <ImageCard
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title="{card.title}"
            caption={card.caption}
          />
        {/each}
      </div>
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
    margin-left: 50px; 
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
    align-items: center;
    padding: 20px;
    padding-right: 90px;
    transform: translateY(-80px); /* move up by 20px */
  }
  

</style>
