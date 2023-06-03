<style>
  :root {
    --main-color: white;
    --main-font: sans-serif;
    --main-font-size: 16px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    width: 100%; /* Take up the whole width of the page */
    max-width: 100%; /* Optional: Limit the maximum width */
  }

  .card {
    background: #333;
    overflow: hidden;
    height: 600px;
    display: flex;
    border-radius: 20px;
    width: 100%; /* Take up the whole width of the parent container */
    perspective: 1000px; /* Perspective for 3D transformation */
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }

  .card.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    z-index: 2;
  }

  .card-back {
    transform: rotateY(180deg);
    background-color: #555;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .card-back p {
    margin: 0;
    transform: rotateY(180deg);
  }

  .image {
    width: 50%;
    height: 100%;
    background: center / cover;
    background-image: url("/playstation.jpg");
  }

  .info {
    padding: 10px 20px 15px;
  }

  .name,
  .location-label,
  .location,
  .location a {
    font-family: var(--main-font);
    color: var(--main-color);
  }
</style>


<script>

const BASE_URL = `https://api.unsplash.com`;
  function toggleCard(index) {
    dataArray[index].showBack = !dataArray[index].showBack;
  }

  let dataArray = [
  { name: "un1", location: "Location 1", showBack: false , url:""},
  { name: "un2", location: "Location 2", showBack: false , url:""},
  { name: "un3", location: "Location 3", showBack: false , url:""},
  { name: "un4", location: "Location 4", showBack: false , url:""},
  { name: "un5", location: "Location 5", showBack: false , url:""},
  { name: "un6", location: "Location 6", showBack: false , url:""},
];

async function fetchImages() {
  const response = await fetch(
    `${BASE_URL}/search/photos?query=gaming&client_id=-N6JZHxqqovedx2eWCPPe5NbO2-r3h1SJE5_PnCWU7E&per_page=30&page=2&color=blue`

  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const { results } = await response.json();
  return results.map((result) => result.urls.regular);
}

async function populateImageUrls() {
  const images = await fetchImages();

  for (let i = 0; i < Math.min(dataArray.length, images.length); i++) {
    dataArray[i].url = images[i];
  }
  console.log(dataArray);
}

populateImageUrls();

</script>

<div class="grid">
  {#each dataArray as item, index}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="card {item.showBack ? 'flipped' : ''}" on:click={() => toggleCard(index)}>
    <div class="card-inner">
      <div class="card-front">
        <div class="image" style="background-image: url('{item.url}')"></div>
        <div class="info">
          <h1 class="name">{item.name}</h1>
          <h3 class="locationLabel">Last known location</h3>
          <h3 class="location">{item.location}</h3>
        </div>
      </div>
      <div class="card-back">
        <p>Additional information goes here...</p>
      </div>
    </div>
  </div>
{/each}

</div>
