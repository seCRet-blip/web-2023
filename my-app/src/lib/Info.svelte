<script>
  import { onMount } from 'svelte';

  const BASE_URL = `https://api.unsplash.com`;
  let images = []

  async function fetchImages() {
    const response = await fetch(
      `${BASE_URL}/search/photos?query=gaming&client_id=-N6JZHxqqovedx2eWCPPe5NbO2-r3h1SJE5_PnCWU7E&per_page=30&page=10`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const { results } = await response.json();
    images = results.map((result) => result.urls.regular);
  }

  onMount(fetchImages);

  let isFlipped = false;
  const flipCard = () => isFlipped = !isFlipped;
</script>

<style>
  .card {
    perspective: 1000px;
    width: 100%;
    height: 400px;
    position: relative;
    margin-top: 5%;
    background-color: #333;
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card-content.flipped {
    transform: rotateY(180deg);
  }

  .card .front, .card .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card .front img, .card .back img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  .card .front .text, .card .back .text {
    width: 50%;

    box-sizing: border-box;
  }

  .card .back {
    transform: rotateY(180deg);
    background-color: #222;
  }

  .back-text , .text {
    color: white;
    font-size: 20px;
    width: 100%;
    height:100%;
  }
  .back-text{
    margin-left: 25%;
    margin-right: 25%;
    line-height: 30px;
  }

</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={flipCard}>
  <div class={`card-content ${isFlipped ? 'flipped' : ''}`}>
    {#if images[1]} <!-- Check if the image url exists before trying to display it -->
      <div class="front">

        <img src={images[1]} alt="Front image">
        <div class="text">
          <p>Exploring Game Software Development</p>

        </div>
      </div>
      <div class="back">
        <div class="back-text">
          <p>Discover the world of Game Software Development where creativity meets technology. Learn about the latest trends, tools, and techniques used by industry professionals to create engaging, immersive gaming experiences. From graphic design to artificial intelligence, game software development encapsulates a variety of skills and disciplines. Whether you're a budding game developer or a seasoned pro, there's always something new to learn and explore in this dynamic field.</p>
        </div>
      </div>
    {/if}
  </div>
</div>
