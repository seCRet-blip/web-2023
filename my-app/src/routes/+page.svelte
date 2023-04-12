<script>
      let URl = "src/lib/images/geforce.jpg";
  let URl2 = "src/lib/images/playstation.jpg";
  let URl3 = "src/lib/images/Best-mario-games-hp.webp";
    import { onMount } from 'svelte';
  
    onMount(() => {
      var slider = document.getElementById("slider");
      var sliderWidth = slider.offsetWidth;
      var slideList = document.getElementById("slideWrap");
      var count = 1;
      var items = slideList.querySelectorAll("li").length;
      var prev = document.getElementById("prev");
      var next = document.getElementById("next");
  
      var prevSlide = function() {
        if(count > 1) {
          count = count - 2;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = 1) {
          count = items - 1;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
      };
  
      var nextSlide = function() {
        if(count < items) {
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
        else if(count = items) {
          slideList.style.left = "0px";
          count = 1;
        }
      };
  
      window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
      });
  
      next.addEventListener("click", function() {
        nextSlide();
      });
  
      prev.addEventListener("click", function() {
        prevSlide();
      });
  
      setInterval(function() {
        nextSlide()
      }, 8000);
    });
  </script>
  
  
  <div id="slider">
    <ul id="slideWrap">
      <li><img class="image-slider" src={URl} alt="nav-icon" /></li>
      <li><img class="image-slider" src={URl2} alt="playstation" /></li>
      <li><img class="image-slider" src={URl3} alt="playstation" /></li>
    </ul>
    <a id="prev" href="/">&#8810;</a>
    <a id="next" href="/">&#8811;</a>
  </div>

<style>


#slider {
  position: relative;
  width: 100%;
  height: 500px;

  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}


#slider ul {
  position: relative;
  list-style: none;
  height: 100%;
  width: 10000%;
  padding: 0;
  margin: 0;
  transition: all 750ms ease;
  left: 0;
}
#slider ul li {
  position: relative;
  height: 100%;
  float: left;
}
#slider ul li img{
  width: 1480px;
  height: 500px;
  z-index: -1;
}
#slider #prev, #slider #next {
  width: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  text-decoration: none;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  font-size: 2rem;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  transform: translateY(-50%);
  transition: all 150ms ease;
}
#slider #prev {
  left: 10px;
}
#slider #next {
  right: 10px;
}

#slider #prev:hover, #slider #next:hover {
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 0;
}
</style>
