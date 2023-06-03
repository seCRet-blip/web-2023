<style>
    :root {
  --main-color: white;
  --main-font: sans-serif;
  --main-font-size: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card {
  background: #333;
  overflow: hidden;
  height: 240px;
  display: flex;
  border-radius: 20px;
}

.image {
  width: 30%;
  background: center / cover;
  background-image: url("/playstation.jpg");
}

.info {
  padding: 10px 20px 15px;
}




.name, .location-label, .location, .location a {
  font-family: var(--main-font);
  color: var(--main-color);
}
</style>


<div class="grid">

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="card">
        <div class="image"></div>
        <div class="info">
          <h1 class="name">un</h1>
        
          <h3 class="locationLabel">Last known location</h3>
          <h3 class="location">
           
          </h3>
        </div>
      </div>
  
  </div>