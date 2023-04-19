<script>
      let URl = "src/lib/images/geforce.jpg";
    let URl2 = "src/lib/images/playstation.jpg";
  let URl3 = "src/lib/images/Best-mario-games-hp.webp";
    
  </script>
  
  <main>
    <div class="container">
      <div class="slider">
        <div class="slider_btn-conatiner">
          <button class="slider_btn slider_btn-left" aria-label="move to preivous slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <button class="slider_btn slider_btn-right" aria-label="move to next slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
        <div class="slide">
          <img src={URl} alt="nav-icon" />
          <img src={URl} alt="nav-icon" />
          <img src={URl} alt="nav-icon" />
        </div>
      </div>
    </div>
 
</main>
<style>
*,::after,*::before{
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  display: grid;
  place-items: center;
  padding: 2rem 0;
  
}
.slider{
  position: relative;
  display: grid;
  place-items: center;
  /*overflow: hidden;*/
  box-shadow: 
  20px 20px 50px hsl(210, 50%, 40% .4),
  -20px -20px 50px hsl(210, 50%, 80% .2);
}
.slide img {
  width: 100%;
  flex: 1 0 100%;
}
.slide{
  width: 1500px;
  height: 400px;
  max-height: 100vh;
  display: flex;
}
.slider_btn{
  border-radius: 50%s;
  position: absolute;
  z-index: 2;
  padding: .2rem;
  top: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 55;
}
.slider_btn svg{
  pointer-events: none;
}
.slider_btn-left{
  left: 0;
  transform: translate(50%-50%);
}
.slider_btn-left:is:hover, :focus{
  animation: 150ms forwards moveLeft;
}
@keyframes moveLeft{
  50%{
    left: -3px;
  }
}
</style>
