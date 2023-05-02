<script>
  import ImageCard from './ImageCard.svelte';
  
  const imageSrc = "src/lib/images/playstation.jpg";
  const imageAlt = 'Image';
  const text = 'This is an image';
</script>

<div class="carousel-container">
  <ol class="carousel__viewport">
    <!-- Slide 1 -->
    <li id="carousel__slide1" class="carousel__slide">
      <div class="carousel__snapper">
        <div class="text-container">
          <p class="txt">Your text goes here</p>
        </div>
        <div class="image-container">
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
        </div>
      </div>
    </li>

    <!-- Slide 2 -->
    <li id="carousel__slide2" class="carousel__slide">
      <div class="carousel__snapper">
        <div class="image-container">
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
        </div>
      </div>
    </li>

    <!-- Slide 3 -->
    <li id="carousel__slide3" class="carousel__slide">
      <div class="carousel__snapper">
        <div class="image-container">
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
        </div>
      </div>
    </li>

    <!-- Slide 4 -->
    <li id="carousel__slide4" class="carousel__slide">
      <div class="carousel__snapper">
        <div class="image-container">
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
          <ImageCard imageSrc="{imageSrc}" imageAlt="{imageAlt}" text="{text}" />
        </div>
      </div>
    </li>
  </ol>
</div>
<style>.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scrollbar-width: none; /* Hide the scrollbar */
}

.carousel__viewport::-webkit-scrollbar {
  display: none; /* Hide the scrollbar for WebKit browsers */
}

.image-container {
  width: 60%;
  height: 100%;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: auto; /* Add overflow-x to enable horizontal scrolling */
}

/* Remove margin between ImageCard components */
.image-container > * {
  margin-right: 0;
}

.carousel__slide {
  position: relative;
  display: inline-block;
  flex: none;
  width: 100%;
  height: 100%; /* Set the height to 100% to match the carousel-container height */
  scroll-snap-align: start;
}

.carousel-container {
  width: 100%; /* Make the container take up the entire width of the page */
  height: 600px;
  margin: 0; /* Remove the horizontal margin */
  position: relative;
  overflow: hidden; /* Hide overflowing content */
}

.text-container {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
  padding: 20px;
}

.txt {
  margin-top: 0;
  font-size: 28px;
  font-family: 'Open Sans', sans-serif;
}

.image-container {
  width: 60%;
  height: 100%;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}


</style>