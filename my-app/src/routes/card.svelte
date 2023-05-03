<script>
  import ImageCard from './ImageCard.svelte';
  import TextCard from './TextCard.svelte';
  
  const imageSrc = "src/lib/images/playstation.jpg";
  const imageAlt = 'Image';
  const text = 'This is an image';
</script>

<div class="carousel-container">
  <div class="cards-container">

    <div class="image-container">
      <div class="text-container">
        <TextCard title="Title 1" text="This is some text." />
      </div>
      <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
      <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
      <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
      <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
      <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
      <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
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
    width: 80%;
    height: 100%;
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
  }
  

</style>
