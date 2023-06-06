<script>
  let isFlipped = false;

  function flipCard() {
    isFlipped = !isFlipped;
  }
</script>

<div class="card" class:flipped={isFlipped} on:click={flipCard}>
  <div class="card-front">
    <img src="image.jpg" alt="Image">
    <h2>Front Text</h2>
  </div>
  <div class="card-back">
    <h2>Back Text</h2>
    <p>Additional information goes here.</p>
  </div>
</div>

<style>
  .card {
    width: 200px;
    height: 300px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

  .card-back {
    transform: rotateY(180deg);
  }

  img {
    width: 100%;
    height: auto;
  }

  h2, p {
    text-align: center;
    padding: 10px;
  }
</style>
