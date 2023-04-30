<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <div class="text-container">
          <h2>First Slide</h2>
          <div class="txt">
            <p>ethay idianvay jetson andyay isaac atformsplay ovidepray end-to-endyay olutionssay otay evelopday andyay eployday ai-poweredyay autonomousyay achinesmay andyay edgeyay omputingcay applicationsyay acrossyay anufacturingmay , ogisticslay , ealthcarehay , artsmay itiescay , andyay etailray. </p>
          </div>
        </div>
      
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="img" src="src\lib\images\playstation.jpg" alt="Image 1">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="img" src="src\lib\images\playstation.jpg" alt="Image 2">
        <p class="text">this is an image</p>
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>
  <style>
    @font-face {
  font-family: 'Open Sans';
  src: url('path/to/OpenSans-Regular.ttf') format('truetype');
}
@keyframes tonext {
  0% {
    left: 0;
  }
  70% {
    left: 0;
  }
  80% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes tostart {
  0% {
    left: -300%;
  }
  20% {
    left: -300%;
  }
  30% {
    left: -200%;
  }
  100% {
    left: 0%;
  }
}

.text-container {
  width: 30%;
  height: 50%;
  float: left;
  left: 100px;  
  position: relative;
}
.txt {
  margin-top: 0;
  font-size: 28px;
  font-family: 'Open Sans', sans-serif;
}
body {
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  font-family: 'Lato', sans-serif;
}
* {
  box-sizing: border-box;
  scrollbar-color: transparent transparent; /* thumb and track color */
  scrollbar-width: 0px;
}
*::-webkit-scrollbar {
  width: 0;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}
* {
  -ms-overflow-style: none;
}
ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.carousel {
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}
.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
}
.img{
  height: 200px;
  width: 400px;
  margin-top: 50px;
  transform: translateX(200px);
}
.text{
  transform: translateX(750px);
}
.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
}
.carousel__slide:nth-child(even) {
  background-color: #99f;
}
.carousel__slide:before {
  content: counter(item); /**this adds the number to the card*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-40%,70px);
  color: #fff;
  font-size: 2em;
}
.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}
.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 0;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 2rem;
  height: 2rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}
.carousel::before,
.carousel__prev {
  position: absolute;
  top: 30px;
  margin-top: -2rem;
  right: 4rem;
  transform: translateY(-50%);
}

.carousel::after,
.carousel__next {
  position: absolute;
  top: 30px;
  margin-top: -2rem;
  right: 1rem;
  transform: translateY(-50%);
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1rem 1rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 1rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}
.carousel::before,
.carousel__prev {
  /* remove the circular shape */
  border-radius: 0;
}

.carousel::after,
.carousel__next {
  /* remove the circular shape */
  border-radius: 0;
}
.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}
.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}
  </style>